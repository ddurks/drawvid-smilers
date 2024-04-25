import * as THREE from "three";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.139.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.139.0/examples/jsm/controls/OrbitControls.js";
import * as CANNON from "cannon";

var IS_MOBILE;
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(14|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|14|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|84|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  IS_MOBILE = true;
} else {
  IS_MOBILE = false;
}
document.getElementById("controls").innerHTML = IS_MOBILE
  ? "[joystick] - move  [pinch and swipe] - camera"
  : "[W] [A] [S] [D] - move  [scroll wheel] - zoom  [click + drag] - camera";

AWS.config.update({
  region: "ca-central-1",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "ca-central-1:afdb4202-24ce-4f95-a22a-dabdfef7a379",
  }),
});
const s3 = new AWS.S3();

let currentView = "3D";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("toggleView").addEventListener("click", toggleView);

  const slider = document.getElementById("sizeSlider");
  setSliderAttributes(slider);
  slider.addEventListener("input", function () {
    adjustImageSize(this.value);
  });

  const headerImg = document.getElementById("galleryHeaderImg");
  headerImg.onload = function () {
    adjustImagePosition(this);
  };
  if (headerImg.complete) {
    adjustImagePosition(headerImg);
  }
});

function adjustImagePosition(img) {
  const viewportHeight = window.innerHeight;
  const imgHeight = img.offsetHeight;

  if (imgHeight > viewportHeight * 0.5) {
    img.style.position = "relative";
    img.style.top = "-50%";
  }
}

function setSliderAttributes(slider) {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 480) {
    // Mobile devices
    slider.min = 50;
    slider.max = screenWidth;
    slider.value = 150;
  } else if (screenWidth <= 1024) {
    // Tablets
    slider.min = 100;
    slider.max = screenWidth;
    slider.value = 250;
  } else {
    // Desktops
    slider.min = 150;
    slider.max = screenWidth;
    slider.value = 500;
  }
  adjustImageSize(slider.value);

  // Optional: Update dynamically on window resize
  window.addEventListener("resize", () => {
    setSliderAttributes(slider);
  });
}

function adjustImageSize(value) {
  const items = document.querySelectorAll(".flex-item");
  items.forEach((item) => {
    item.style.width = `${value}px`;
    item.style.height = `${value}px`;
  });
}

function toggleView() {
  const threeContainer = document.getElementById("threeCanvas");
  const galleryContainer = document.getElementById("galleryContainer");
  const slider = document.getElementById("slider");
  const body = document.body;
  const controls = document.getElementById("controls");
  const toggleImage = document.getElementById("toggleImage");
  const joystick = document.getElementById("joystickWrapper");

  if (currentView === "2D") {
    threeContainer.style.display = "block";
    galleryContainer.style.display = "none";
    slider.style.display = "none";
    body.style.overflow = "hidden";
    currentView = "3D";
    controls.innerHTML = IS_MOBILE
      ? "[joystick] - move  [pinch and swipe] - camera"
      : "[W] [A] [S] [D] - move  [scroll wheel] - zoom  [click + drag] - camera";
    simulating = true;
    toggleImage.src = "./assets/2d.png";
    joystick.style.display = "block";
  } else {
    threeContainer.style.display = "none";
    galleryContainer.style.display = "flex";
    galleryContainer.style.flexDirection = "column";
    slider.style.display = "flex";
    body.style.overflow = "auto";
    currentView = "2D";
    controls.innerHTML = "";
    simulating = false;
    toggleImage.src = "./assets/3d.png";
    joystick.style.display = "none";
    hideDisplayOverlay();
  }
}

export const W = "w";
export const A = "a";
export const S = "s";
export const D = "d";
export const SHIFT = "shift";
export const DIRECTIONS = [W, A, S, D];

export const fwd = "forward";
export const back = "back";
export const lft = "left";
export const rt = "right";
export const JOY_DIRS = [fwd, back, lft, rt];

export class CharacterControls {
  walkDirection = new THREE.Vector3();
  rotateAngle = new THREE.Vector3(0, 1, 0);
  rotateQuarternion = new THREE.Quaternion();
  cameraTarget = new THREE.Vector3();
  defaultWalkVelocity = 10;
  walkVelocity = 10;
  fadeDuration = 0.2;
  oldPosition = null;
  walkStart = null;

  constructor(model, mixer, animationsMap, camera, currentAction) {
    this.model = model;
    this.mixer = mixer;
    this.animationsMap = animationsMap;
    this.currentAction = currentAction;
    this.camera = camera;
  }

  update(delta, keysPressed, joyValues, isMobile) {
    const directionPressed = DIRECTIONS.some((key) => keysPressed[key] == true);
    const joystickPressed = JOY_DIRS.some((key) => joyValues[key] > 0);

    var play = "idle";
    if ((!isMobile && directionPressed) || (isMobile && joystickPressed)) {
      play = "walk";
      if (this.walkStart === null) {
        this.walkStart = Date.now();
      }

      // calculate towards camera direction
      var angleYCameraDirection = Math.atan2(
        this.camera.position.x - body.position.x,
        this.camera.position.z - body.position.z
      );
      // diagonal movement angle offset
      var directionOffset;
      if (isMobile) {
        directionOffset = this.joyDirectionOffset(joyValues);
      } else {
        directionOffset = this.directionOffset(keysPressed);
      }

      // rotate model
      this.rotateQuarternion.setFromAxisAngle(
        this.rotateAngle,
        angleYCameraDirection + directionOffset
      );
      this.model.quaternion.rotateTowards(this.rotateQuarternion, 0.2);

      // calculate direction
      this.camera.getWorldDirection(this.walkDirection);
      this.walkDirection.y = 0;
      this.walkDirection.normalize();
      this.walkDirection.applyAxisAngle(this.rotateAngle, directionOffset);

      // move model & camera
      body.velocity.set(
        this.walkDirection.x * this.walkVelocity,
        0,
        this.walkDirection.z * this.walkVelocity
      );
    } else {
      this.walkStart = null;
      this.walkVelocity = this.defaultWalkVelocity;
    }

    this.updateCameraTarget();

    this.updateAnim(play, delta);
  }

  updateAnim(play, delta) {
    if (this.currentAction != play) {
      const toPlay = this.animationsMap.get(play);
      const current = this.animationsMap.get(this.currentAction);

      current.fadeOut(this.fadeDuration);
      toPlay.reset().fadeIn(this.fadeDuration).play();

      this.currentAction = play;
    }
    var speedMultiplier = 1;
    if (this.walkStart !== null) {
      var deltat = Date.now() - this.walkStart;
      if (deltat > 2000) {
        speedMultiplier = deltat / 2000;
        if (speedMultiplier > 2) {
          speedMultiplier = 2;
        }
      }
      this.walkVelocity = this.defaultWalkVelocity * speedMultiplier;
    }
    this.mixer.update(delta * speedMultiplier);
  }

  updateCameraTarget() {
    // calculate camera movement
    let moveX =
      (body.velocity.x > 0 ? 1 : -1) *
      Math.abs(body.position.x - body.lastPosition.x);
    let moveZ =
      (body.velocity.z > 0 ? 1 : -1) *
      Math.abs(body.position.z - body.lastPosition.z);
    body.lastPosition = {
      x: body.position.x,
      y: body.position.y,
      z: body.position.z,
    };

    // move camera
    this.camera.position.x += moveX;
    this.camera.position.z += moveZ;

    // update camera target
    this.cameraTarget.x = body.position.x;
    this.cameraTarget.y = body.position.y + 3;
    this.cameraTarget.z = body.position.z;
    orbitControls.target = this.cameraTarget;
  }

  directionOffset(keysPressed) {
    var directionOffset = 0; // w

    if (keysPressed[W]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4; // w+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (keysPressed[S]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (keysPressed[A]) {
      directionOffset = Math.PI / 2; // a
    } else if (keysPressed[D]) {
      directionOffset = -Math.PI / 2; // d
    }

    return directionOffset;
  }

  joyDirectionOffset(joyValues) {
    var directionOffset = 0; // w

    if (joyValues.forward > 0) {
      if (joyValues.right > 0.25) {
        if (joyValues.right > 0.75) {
          directionOffset = -Math.PI / 2; // d
        } else {
          directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
        }
      } else if (joyValues.left > 0.25) {
        if (joyValues.left > 0.75) {
          directionOffset = Math.PI / 2; // a
        } else {
          directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
        }
      } else {
        directionOffset = Math.PI; // s
      }
    }
    if (joyValues.backward > 0) {
      if (joyValues.right > 0.25) {
        if (joyValues.right > 0.75) {
          directionOffset = -Math.PI / 2; // d
        } else {
          directionOffset = -Math.PI / 4; // w+d
        }
      } else if (joyValues.left > 0.25) {
        if (joyValues.left > 0.75) {
          directionOffset = Math.PI / 2; // a
        } else {
          directionOffset = Math.PI / 4; // w+a
        }
      }
    }

    return directionOffset;
  }
}

// SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// FOG
scene.fog = new THREE.Fog(0xffffff, 50, 75);

// PHYSICS
const world = new CANNON.World();
// Tweak contact properties.
// Contact stiffness - use to make softer/harder contacts
world.defaultContactMaterial.contactEquationStiffness = 1e9;
// Stabilization time in number of timesteps
world.defaultContactMaterial.contactEquationRelaxation = 4;
const solver = new CANNON.GSSolver();
solver.iterations = 7;
solver.tolerance = 0.1;
world.solver = new CANNON.SplitSolver(solver);
// use this to test non-split solver
// world.solver = solver
world.gravity.set(0, -20, 0);
// Create a contact material (friction coefficient = 0.3a)
var physicsMaterial = new CANNON.Material("physics");
const physics_physics = new CANNON.ContactMaterial(
  physicsMaterial,
  physicsMaterial,
  {
    friction: 0.3,
    restitution: 0.0,
  }
);
// We must add the contact materials to the world
world.addContactMaterial(physics_physics);

// CAMERA
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 25, 100);

// RENDERER
const renderer = new THREE.WebGLRenderer({
  antialias: false,
  canvas: document.getElementById("threeCanvas"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = false;

// CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.minDistance = 5;
orbitControls.maxDistance = 15;
orbitControls.enablePan = false;
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
orbitControls.update();

// LIGHTS
light();

// FLOOR
generateFloor();

// LOAD ASSETS and BUILD SCENE
const gLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();

var characterControls,
  guy,
  animationsMap = new Map(),
  body;
gLoader.load("./assets/computer_guy_grey.glb", (gltf) => {
  guy = gltf.scene.children[0];
  guy.position.set(0, 1, 0);
  guy.rotation.y = Math.PI;
  scene.add(guy);
  camera.position.add(guy.position);

  const slipperyMaterial = new CANNON.Material("slippery");
  slipperyMaterial.friction = 0;

  // Player physics body
  const shape = new CANNON.Box(new CANNON.Vec3(1, 1, 1));
  body = new CANNON.Body({
    mass: 1,
    material: slipperyMaterial,
  });
  body.addShape(shape);
  body.position.copy(guy.position);
  body.lastPosition = {
    x: body.position.x,
    y: body.position.y,
    z: body.position.z,
  };
  body.linearDamping = 0.999;
  world.addBody(body);

  const mixer = new THREE.AnimationMixer(guy);
  gltf.animations.forEach((a) => {
    animationsMap.set(a.name, mixer.clipAction(a));
  });
  animationsMap.get("idle").fadeIn(5).play();

  characterControls = new CharacterControls(
    guy,
    mixer,
    animationsMap,
    camera,
    "idle"
  );
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const roomSize = 40;
const doorWidth = 1;
const doorHeight = 20;
var room, display;
gLoader.load("./assets/gallery.glb", (gltf) => {
  room = gltf.scene.getObjectByName("room");
  display = gltf.scene.getObjectByName("display");

  createRoom(0, 0, 0, roomSize, doorWidth, doorHeight); // Central room
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        // Avoid recreating the central room
        createRoom(
          i * roomSize,
          0,
          j * roomSize,
          roomSize,
          doorWidth,
          doorHeight
        );
      }
    }
  }
});

const bucketName = "drawvid-art";
const imageContainer = document.getElementById("imageContainer");
var allArtData;
async function loadAllArt() {
  const prefix = "png/";
  s3.listObjectsV2(
    { Bucket: bucketName, Prefix: prefix },
    async (err, data) => {
      if (err) console.log(err, err.stack);
      else {
        allArtData = shuffle(data.Contents);
        await load4ArtPieces(0, 0, 0);
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i !== 0 || j !== 0) {
              await load4ArtPieces(i * roomSize, 0, j * roomSize);
            }
          }
        }
      }
    }
  );
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const TOTAL_ART = 182;
let artIndex3d = 0,
  artIndex2d = 0;
loadAllArt();

async function load4ArtPieces(x, y, z) {
  const halfSize = 11.38;
  const height = y + 4.7;
  const positions = [
    new THREE.Vector3(x - halfSize, height, z - halfSize),
    new THREE.Vector3(x + halfSize, height, z - halfSize),
    new THREE.Vector3(x - halfSize, height, z + halfSize),
    new THREE.Vector3(x + halfSize, height, z + halfSize),
  ];

  const artPieces = Array.from({ length: 4 }, () => {
    if (artIndex3d >= TOTAL_ART) return null;
    return allArtData[artIndex3d++];
  });
  artIndex2d = artIndex3d;

  artPieces.forEach(async (file, index) => {
    if (!file) return;
    const params = {
      Bucket: bucketName,
      Key: file.Key,
    };
    try {
      const data = await s3GetObjectPromise(params);
      const url = URL.createObjectURL(new Blob([data.Body]));
      createPlaneWithTexture(url, positions[index], x, y, z);
      addImageTo2DGallery(url);
    } catch (err) {
      console.log(err, err.stack);
    }
  });
}

async function loadMoreArt2D() {
  const artPieces = Array.from({ length: 10 }, () => {
    if (artIndex2d >= TOTAL_ART) return null;
    return allArtData[artIndex2d++];
  });

  artPieces.forEach(async (file, index) => {
    if (!file) return;
    const params = {
      Bucket: bucketName,
      Key: file.Key,
    };
    try {
      const data = await s3GetObjectPromise(params);
      const url = URL.createObjectURL(new Blob([data.Body]));
      addImageTo2DGallery(url);
    } catch (err) {
      console.log(err, err.stack);
    }
  });
}

let timer;
window.addEventListener("scroll", () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    if (
      currentView === "2D" &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      loadMoreArt2D();
    }
  }, 1000); // Adjust the timeout to suit your needs, 100ms is generally a good starting point
});

function s3GetObjectPromise(params) {
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function addImageTo2DGallery(url) {
  const div = document.createElement("div");
  div.className = "flex-item";
  const slider = document.getElementById("sizeSlider");
  div.style.width = `${slider.value}px`;
  div.style.height = `${slider.value}px`;

  const disp = document.createElement("img");
  disp.className = "flex-display";
  disp.src = "./assets/display-nox.png";
  disp.alt = "Display Image";

  const img = document.createElement("img");
  img.className = "flex-img";
  img.src = url;
  img.alt = "Gallery Image";

  // Add error handling to revoke URL in case the image fails to load
  img.onerror = () => {
    console.log("Failed to load gallery image");
    URL.revokeObjectURL(url); // Ensure to free up resources on error as well
  };

  div.appendChild(disp);
  div.appendChild(img);
  imageContainer.appendChild(div);
}

const sharedGeometry = new THREE.PlaneGeometry(5.5, 5.5);
const img = new Image();
function createPlaneWithTexture(textureURL, position, x, y, z) {
  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width / 2;
    canvas.height = img.height / 2;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.FrontSide,
    });
    const plane = new THREE.Mesh(sharedGeometry, material);

    plane.position.copy(position);
    plane.lookAt(new THREE.Vector3(x, y + 4.7, z));
    scene.add(plane);

    updateNearestDisplay(plane, textureURL, position);
  };
  img.src = textureURL;
}

function updateNearestDisplay(plane, url, position) {
  let minDist = Infinity;
  let nearestDisplay = null;

  displays.forEach((display, index) => {
    if (!display.imageUrl) {
      const dist = display.position.distanceTo(position);
      if (dist < minDist) {
        minDist = dist;
        nearestDisplay = display;
      }
    }
  });

  if (nearestDisplay !== null) {
    nearestDisplay.activeImage = plane;
    nearestDisplay.imageUrl = url;
    nearestDisplay.children.forEach((child) => {
      child.activeImage = plane;
      child.imageUrl = url;
    });
  }
}

var displays = [];
function addDisplays(x, y, z) {
  var halfSize = 13;
  const positions = [
    new THREE.Vector3(x - halfSize, y, z - halfSize),
    new THREE.Vector3(x + halfSize, y, z - halfSize),
    new THREE.Vector3(x - halfSize, y, z + halfSize),
    new THREE.Vector3(x + halfSize, y, z + halfSize),
  ];

  positions.forEach((pos) => {
    let newDisplay = display.clone();
    newDisplay.position.set(pos.x, pos.y, pos.z);
    newDisplay.lookAt(new THREE.Vector3(x, y, z));
    scene.add(newDisplay);
    displays.push(newDisplay);
  });
}

const spawnedRooms = new Set();
const existingWalls = new Set();
function createRoom(x, y, z, roomSize, doorWidth, doorHeight) {
  let newRoom = room.clone();
  newRoom.position.set(x, y, z);
  scene.add(newRoom);

  let roomX = Math.floor(x / roomSize);
  let roomZ = Math.floor(z / roomSize);
  spawnedRooms.add(roomKey(roomX, roomZ));

  addDisplays(x, y, z);

  const thickness = 6;
  const halfRoomSize = roomSize / 2;
  const halfDoorWidth = doorWidth / 2;

  const positionsAndShapes = {
    front: {
      left: {
        position: `${
          x - halfRoomSize + (halfRoomSize - halfDoorWidth) / 2
        }_${y}_${z + halfRoomSize}`,
        size: [halfRoomSize - halfDoorWidth - thickness, roomSize, thickness],
      },
      right: {
        position: `${
          x + halfRoomSize - (halfRoomSize - halfDoorWidth) / 2
        }_${y}_${z + halfRoomSize}`,
        size: [halfRoomSize - halfDoorWidth - thickness, roomSize, thickness],
      },
    },
    back: {
      left: {
        position: `${
          x - halfRoomSize + (halfRoomSize - halfDoorWidth) / 2
        }_${y}_${z - halfRoomSize}`,
        size: [halfRoomSize - halfDoorWidth - thickness, roomSize, thickness],
      },
      right: {
        position: `${
          x + halfRoomSize - (halfRoomSize - halfDoorWidth) / 2
        }_${y}_${z - halfRoomSize}`,
        size: [halfRoomSize - halfDoorWidth - thickness, roomSize, thickness],
      },
    },
    right: {
      left: {
        position: `${x + halfRoomSize}_${y}_${
          z - halfRoomSize + (halfRoomSize - halfDoorWidth) / 2
        }`,
        size: [thickness, roomSize, halfRoomSize - halfDoorWidth - thickness],
      },
      right: {
        position: `${x + halfRoomSize}_${y}_${
          z + halfRoomSize - (halfRoomSize - halfDoorWidth) / 2
        }`,
        size: [thickness, roomSize, halfRoomSize - halfDoorWidth - thickness],
      },
    },
    left: {
      left: {
        position: `${x - halfRoomSize}_${y}_${
          z - halfRoomSize + (halfRoomSize - halfDoorWidth) / 2
        }`,
        size: [thickness, roomSize, halfRoomSize - halfDoorWidth - thickness],
      },
      right: {
        position: `${x - halfRoomSize}_${y}_${
          z + halfRoomSize - (halfRoomSize - halfDoorWidth) / 2
        }`,
        size: [thickness, roomSize, halfRoomSize - halfDoorWidth - thickness],
      },
    },
  };

  // Create each wall's collision boxes only if they don't exist
  Object.keys(positionsAndShapes).forEach((wallKey) => {
    const wall = positionsAndShapes[wallKey];
    Object.keys(wall).forEach((partKey) => {
      const part = wall[partKey];
      if (!existingWalls.has(part.position)) {
        existingWalls.add(part.position);
        const positionComponents = part.position.split("_").map(Number);
        let wallBody = new CANNON.Body({
          mass: 0,
          type: CANNON.Body.KINEMATIC,
          position: new CANNON.Vec3(...positionComponents),
        });
        const boxShape = new CANNON.Box(
          new CANNON.Vec3(...part.size.map((s) => s / 2))
        );
        wallBody.addShape(boxShape);
        world.addBody(wallBody);
      }
    });
  });
}

function roomKey(x, z) {
  return `${x},${z}`;
}

async function checkAndSpawnRoom(x, z, roomSize, doorWidth, doorHeight) {
  let key = roomKey(x, z);
  if (!spawnedRooms.has(key) && artIndex3d <= TOTAL_ART - 1) {
    createRoom(x * roomSize, 0, z * roomSize, roomSize, doorWidth, doorHeight);
    await load4ArtPieces(x * roomSize, 0, z * roomSize);
    spawnedRooms.add(key);
  }
}

var currentPlayerRoomX = 0;
var currentPlayerRoomZ = 0;

function updatePlayerRoom(playerPosition) {
  let newRoomX = Math.floor(playerPosition.x / roomSize);
  let newRoomZ = Math.floor(playerPosition.z / roomSize);

  // Check if player has entered a new room
  if (newRoomX !== currentPlayerRoomX || newRoomZ !== currentPlayerRoomZ) {
    currentPlayerRoomX = newRoomX;
    currentPlayerRoomZ = newRoomZ;
    spawnAdjacentRooms(newRoomX, newRoomZ);
  }
}

async function spawnAdjacentRooms(x, z) {
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      // Skip the current room
      if (dx !== 0 || dz !== 0) {
        await checkAndSpawnRoom(
          x + dx,
          z + dz,
          roomSize,
          doorWidth,
          doorHeight
        );
      }
    }
  }
}

var mouse = {
  x: 0,
  y: 0,
};
const onMouseClick = (event) => {
  if (currentView === "3D") {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    handleSceneClick();
  }
};

const onTouchStart = (event) => {
  if (currentView === "3D") {
    const touch = event.touches[0];

    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

    handleSceneClick();
  }
};

function handleSceneClick() {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(displays);

  if (intersects.length > 0) {
    const displayClicked = intersects[0].object;
    handleDisplayClicked(displayClicked);
  } else {
    if (document.getElementById("topImage").style.display === "block") {
      hideDisplayOverlay();
    }
  }
}

function handleDisplayClicked(displayClicked) {
  if (displayClicked) {
    document.getElementById("topImage").src = displayClicked.imageUrl;
    showDisplayOverlay();
  }
}

window.addEventListener("click", onMouseClick, false);
window.addEventListener("touchstart", onTouchStart, false);

// KEYBOARD CONTROLS
const keysPressed = {};
document.addEventListener(
  "keydown",
  (event) => {
    keysPressed[event.key.toLowerCase()] = true;
  },
  false
);
document.addEventListener(
  "keyup",
  (event) => {
    keysPressed[event.key.toLowerCase()] = false;
  },
  false
);

function showDisplayOverlay() {
  document.getElementById("displayImage").style.display = "block";
  document.getElementById("topImage").style.display = "block";
  adjustTopImageSize();
}

function hideDisplayOverlay() {
  document.getElementById("displayImage").style.display = "none";
  document.getElementById("topImage").style.display = "none";
}

function adjustTopImageSize() {
  const backgroundImage = document.querySelector(".full-screen-image");
  const topImage = document.querySelector(".top-image");
  topImage.style.maxWidth = backgroundImage.offsetWidth * 0.5 + "px";
  topImage.style.maxHeight = backgroundImage.offsetHeight * 0.5 + "px";
}

// JOYSTICK
var joyManager;
var joyValues = {
  backward: 0,
  forward: 0,
  right: 0,
  left: 0,
  tempVector: new THREE.Vector3(),
  upVector: new THREE.Vector3(0, 1, 0),
  tempVector: new THREE.Vector3(),
};

function addJoystick() {
  const options = {
    zone: document.getElementById("joystickWrapper"),
    size: window.innerWidth / 3,
    multitouch: true,
    maxNumberOfNipples: 2,
    mode: "static",
    restJoystick: true,
    shape: "circle",
    position: { top: "60px", left: "60px" },
    dynamicPage: true,
  };

  joyManager = nipplejs.create(options);

  joyManager["0"].on("move", function (evt, data) {
    const forward = data.vector.y;
    const turn = data.vector.x;

    if (forward > 0) {
      joyValues.backward = Math.abs(forward);
      joyValues.forward = 0;
    } else if (forward < 0) {
      joyValues.backward = 0;
      joyValues.forward = Math.abs(forward);
    }

    if (turn > 0) {
      joyValues.left = 0;
      joyValues.right = Math.abs(turn);
    } else if (turn < 0) {
      joyValues.left = Math.abs(turn);
      joyValues.right = 0;
    }
  });

  joyManager["0"].on("end", function (evt) {
    joyValues.forward = 0;
    joyValues.backward = 0;
    joyValues.left = 0;
    joyValues.right = 0;
  });
}

// ANIMATE
const clock = new THREE.Clock();
const timeStep = 1 / 60;
var simulating = true;
function animate() {
  if (simulating) {
    let mixerUpdateDelta = clock.getDelta();
    if (characterControls) {
      characterControls.update(
        mixerUpdateDelta,
        keysPressed,
        joyValues,
        IS_MOBILE
      );
      guy.position.copy(body.position);
      body.quaternion.copy(guy.quaternion);
      updatePlayerRoom(characterControls.model.position);
    }
    orbitControls.update();
    renderer.render(scene, camera);
    world.step(timeStep, mixerUpdateDelta);
  }
  requestAnimationFrame(animate);
}

document.body.appendChild(renderer.domElement);
THREE.DefaultLoadingManager.onLoad = () => {
  if (document.getElementById("loading")) {
    document.getElementById("loading").outerHTML = "";
  }
  if (IS_MOBILE) {
    addJoystick();
  }
  animate();
};

// RESIZE HANDLER
function onWindowResize() {
  adjustTopImageSize();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);

function generateFloor() {
  // Ground Physics
  const groundMaterial = new CANNON.Material("ground");
  groundMaterial.friction = 0.3;
  const groundShape = new CANNON.Plane();
  const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
  groundBody.addShape(groundShape);
  groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  groundBody.position.set(0, -1, 0);
  world.addBody(groundBody);
}

function light() {
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-60, 100, -10);
  scene.add(dirLight);
}
