var images = new Array();
var galleryLoaded = false;

const FRAMERATE = 4;

getRandomInt= function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Smiler extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'smiler');

        scene.add.existing(this);
        let smiler = scene.physics.add.existing(this);
        smiler.setCollideWorldBounds(true);

        this.anims.create({
            key: 'front', 
            frameRate: FRAMERATE,
            frames: this.anims.generateFrameNumbers('smiler', { frames: [0, 1, 2, 3] }),
            repeat: -1
        });
        this.anims.create({
            key: 'left', 
            frameRate: FRAMERATE,
            frames: this.anims.generateFrameNumbers('smiler', { frames: [5, 6, 7, 8] }),
            repeat: -1
        });
        this.anims.create({
            key: 'right', 
            frameRate: FRAMERATE,
            frames: this.anims.generateFrameNumbers('smiler', { frames: [10, 11, 12, 13] }),
            repeat: -1
        });
        this.anims.create({
            key: 'jump', 
            frameRate: FRAMERATE,
            frames: this.anims.generateFrameNumbers('smiler', { frames: [4] }),
            repeat: -1
        });


        this.alive = true;

        return this;
    }
}

class DrawvidDotCom extends Phaser.Scene {
    constructor() {
        super('DrawvidDotCom');
        this.clouds = new Array();
    }

    preload() {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('button', 'assets/button.png');
        this.load.image('home', 'assets/home.png');
        this.load.image('about', 'assets/about.png');
        this.load.image('code', 'assets/code.png');
        this.load.image('art', 'assets/art.png');
        this.load.spritesheet('smiler', 'assets/smiler.png', { frameWidth: 16, frameHeight: 16, margin: 0, spacing: 0 });
        this.load.spritesheet('flower', 'assets/p-flower.png', { frameWidth: 16, frameHeight: 16, margin: 0, spacing: 0 });
        this.load.spritesheet('cloud', 'assets/clouds.png', { frameWidth: 32, frameHeight: 16, margin: 0, spacing: 0 });
        this.load.spritesheet('faces', 'assets/faces.png', { frameWidth: 16, frameHeight: 16, margin: 0, spacing: 0 });
    }

    create() {
        this.physics.world.setBounds(0, 0, GAME.SIZE, GAME.SIZE - 31);
        this.add.image(GAME.SIZE/2, GAME.SIZE/2, 'bg');
        this.add.image(GAME.SIZE/2, GAME.SIZE/2, 'ground');

        this.player = new Smiler(this, GAME.SIZE/2, -32);
        console.log("created");
    }

    handleClouds() {
        if (this.clouds.length < 3) {
            let cloud = this.physics.add.sprite(-32, getRandomInt(0, GAME.SIZE/2), 'cloud');
            cloud.setFrame(getRandomInt(0, 3));
            cloud.body.setAllowGravity(false);
            cloud.setVelocityX(100);
            this.clouds.push(cloud);
            console.log("cloud added");
        }
    }

    update() {
        this.handleClouds();
    }
}

const GAME = {
    SIZE: 128
}

var gameConfig = {
    backgroundColor: 0x00008b,
	render: {
		roundPixels: true,
		pixelArt: true,
		antialias: false,
	},
	scale: {
		parent: 'phaser-div',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: GAME.SIZE,
		height: GAME.SIZE
	},
	parent: "phaser-div",
	dom: {
		createContainer: true
	},	  
    physics: {
		default: 'arcade',
		arcade: {
            gravity: { y: 500 },
			debug: false,
		}
    },
	scene: [DrawvidDotCom]
}
var game = new Phaser.Game(gameConfig);
window.focus();