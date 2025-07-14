import * as THREE from "https://esm.run/three@0.158.0";
import { OrbitControls } from "https://esm.run/three@0.158.0/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "https://esm.run/three@0.158.0/examples/jsm/loaders/GLTFLoader";
import { EXRLoader } from "https://esm.run/three@0.158.0/examples/jsm/loaders/EXRLoader";

class SmokeEmitter {
  constructor(textureURL, scene, camera) {
    this.scene = scene;
    this.camera = camera;

    this.frameRate = 30;
    this.frameCount = 46;
    this.cols = 7;
    this.rows = 7;
    this.maxY = 11;

    this.minScale = 0.5;
    this.maxScale = 4;
    this.lifespanRange = [5, 30];
    this.verticalDriftRange = [0.75, 1.5];
    this.horizontalDriftRange = [-0.1, 0.1];
    this.waftHorizontalWiggle = 1.75;
    this.waftVerticalBias = -0.25;
    this.puffSpeed = 1;

    this.trailInterval = 0.05;
    this.trailDecayRate = 0.01;
    this.trailMinMultiplier = 0.2;
    this.trailMultiplier = 1;
    this.trailTimer = 0;

    this.particles = [];
    this.poolSize = 500;
    this.texturePool = [];
    this.meshPool = [];

    this.emberObject = null;
    this.isActive = false;
    this.scheduledPuff = null;

    this.geometry = new THREE.PlaneGeometry(1, 1);
    this.materialTemplate = null;

    const loader = new THREE.TextureLoader();
    loader.load(textureURL, (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.needsUpdate = true;

      this.materialTemplate = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      for (let i = 0; i < this.poolSize; i++) {
        const tex = texture.clone();
        tex.needsUpdate = true;
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        this.texturePool.push(tex);
      }
    });
  }

  _rand([min, max]) {
    return min + Math.random() * (max - min);
  }

  getTextureFromPool() {
    return this.texturePool.length > 0 ? this.texturePool.pop() : null;
  }

  returnTextureToPool(tex) {
    if (tex && this.texturePool.length < this.poolSize) {
      this.texturePool.push(tex);
    }
  }

  startTrail(emberObject) {
    this.emberObject = emberObject;
    this.trailMultiplier = 1;
    this.trailTimer = 0;
    this.isActive = true;
  }

  stopTrail() {
    this.isActive = false;
    this.emberObject = null;
  }

  scheduleHeadPuff(headBone, duration) {
    const origin = new THREE.Vector3();
    const direction = new THREE.Vector3();
    headBone.getWorldPosition(origin);
    headBone.getWorldDirection(direction);
    origin.add(direction.clone().multiplyScalar(1));
    origin.y += 0.5;

    this.schedulePuff(origin, direction, duration);
  }

  schedulePuff(origin, direction, duration) {
    this.scheduledPuff = {
      origin: origin.clone(),
      direction: direction.clone(),
      timeRemaining: duration,
      interval: 0.05,
      timer: 0,
    };
  }

  emitTrail(position) {
    this.emitParticle(position, null, false);
  }

  emitPuff(position, direction) {
    this.emitParticle(
      position,
      direction.clone().normalize().multiplyScalar(this.puffSpeed),
      true
    );
  }

  emitParticle(position, direction = null, isPuff = false) {
    if (!this.materialTemplate) return;

    const texture = this.getTextureFromPool();
    if (!texture) return;

    let mesh;
    if (this.meshPool.length > 0) {
      mesh = this.meshPool.pop();
      mesh.material.map = texture;
      mesh.material.opacity = 1;
      mesh.scale.setScalar(this.minScale);
    } else {
      const material = this.materialTemplate.clone();
      material.map = texture;

      mesh = new THREE.Mesh(this.geometry, material);
    }
    mesh.position.copy(position);
    mesh.scale.setScalar(this.minScale * (0.8 + Math.random() * 0.4));

    const lifespan =
      this.lifespanRange[0] +
      Math.random() * (this.lifespanRange[1] - this.lifespanRange[0]);

    const velocity = new THREE.Vector3(
      this._rand(this.horizontalDriftRange),
      this._rand(this.verticalDriftRange),
      this._rand(this.horizontalDriftRange)
    );

    if (isPuff && direction) {
      velocity.add(direction);
      mesh.lookAt(position.clone().add(direction));
    }

    mesh.userData = {
      startTime:
        performance.now() / 1000 - Math.random() * (1 / this.frameRate),
      lifespan,
      velocity,
      texture,
    };

    this.scene.add(mesh);
    this.particles.push(mesh);
  }

  update(delta) {
    const now = performance.now() / 1000;

    // Trail
    if (this.isActive && this.emberObject) {
      this.trailTimer += delta;
      this.trailMultiplier = Math.max(
        this.trailMinMultiplier,
        this.trailMultiplier - this.trailDecayRate * delta
      );

      if (this.trailTimer >= this.trailInterval / this.trailMultiplier) {
        const pos = new THREE.Vector3();
        this.emberObject.getWorldPosition(pos);
        this.emitTrail(pos);
        this.trailTimer = 0;
      }
    }

    // Puff
    if (this.scheduledPuff) {
      this.scheduledPuff.timer += delta;
      if (this.scheduledPuff.timer >= this.scheduledPuff.interval) {
        this.emitPuff(this.scheduledPuff.origin, this.scheduledPuff.direction);
        this.scheduledPuff.timer = 0;
        this.scheduledPuff.timeRemaining -= this.scheduledPuff.interval;
      }
      if (this.scheduledPuff.timeRemaining <= 0) {
        this.scheduledPuff = null;
      }
    }

    // Update particles
    this.particles = this.particles.filter((p) => {
      const age = now - p.userData.startTime;
      const life = p.userData.lifespan;

      if (age > life) {
        this.scene.remove(p);
        this.returnTextureToPool(p.userData.texture);
        this.meshPool.push(p);
        return false;
      }

      const frameIndex = Math.floor(age * this.frameRate) % this.frameCount;
      const col = frameIndex % this.cols;
      const row = Math.floor(frameIndex / this.cols);
      const u = col / this.cols;
      const v = 1 - (row + 1) / this.rows;

      p.material.map.offset.set(u, v);
      p.material.map.repeat.set(1 / this.cols, 1 / this.rows);

      const fade = 1 - age / life;
      p.material.opacity = Math.pow(fade, 0.5);
      const scaleFactor =
        this.minScale + (1 - fade) * (this.maxScale - this.minScale);
      p.scale.setScalar(scaleFactor);

      const v3 = p.userData.velocity;
      if (p.position.y >= this.maxY) {
        v3.set(
          (Math.random() - 0.5) * this.waftHorizontalWiggle,
          this.waftVerticalBias + Math.random() * 0.01,
          (Math.random() - 0.5) * this.waftHorizontalWiggle
        );
      } else {
        const decay = 1 - delta * 0.4;
        v3.x *= decay;
        v3.z *= decay;
      }

      p.position.add(v3.clone().multiplyScalar(delta));
      p.lookAt(this.camera.position);
      return true;
    });
  }
}

class Cigarette {
  constructor(gltf, handBone, smokeEmitter, onFinishSmoking) {
    this.object = gltf.scene;
    this.mixer = new THREE.AnimationMixer(this.object);
    this.ember = null;
    this.emberLight = null;
    this.smokeAction = null;
    this.smokePlaying = false;
    this.cachedSmokeTime = 0;
    this.smokeEmitter = smokeEmitter;
    this.onFinishSmoking = onFinishSmoking;

    const clip = gltf.animations.find((c) => c.name === "smoke");
    if (clip) {
      this.smokeAction = this.mixer.clipAction(clip);
      this.smokeAction.setLoop(THREE.LoopOnce, 1);
      this.smokeAction.clampWhenFinished = true;
      this.smokeAction.timeScale = 0.25;
      this.smokeAction.paused = true;

      const handler = (e) => {
        if (e.action === this.smokeAction) {
          this.mixer.removeEventListener("finished", handler);
          this.smokePlaying = false;
          if (this.onFinishSmoking) this.onFinishSmoking();
        }
      };
      this.mixer.addEventListener("finished", handler);
    }

    const tipBone = this.object.getObjectByName("ember");
    if (tipBone) {
      this.ember = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({
          color: 0xff4500,
          emissive: 0xff2200,
          emissiveIntensity: 2,
        })
      );
      this.emberLight = new THREE.PointLight(0xff3300, 0.6, 2);
      this.emberLight.position.set(0, 0, 0);
      this.ember.add(this.emberLight);
      tipBone.add(this.ember);
      this.setEmberVisible(false);
    }

    if (handBone) {
      handBone.add(this.object);
      this.object.position.set(0, 0.75, 0);
      this.object.rotation.set(0.25, Math.PI + 0.5, Math.PI / 2);
      this.object.scale.set(0.5, 0.5, 0.5);
      this.object.visible = false;
    } else {
      console.warn("handr bone not found!");
    }
  }

  update(delta, isDragging) {
    if (this.mixer && isDragging) this.mixer.update(delta);

    if (this.ember?.visible) {
      this.ember.material.emissiveIntensity = 1.5 + Math.random() * 0.5;
      this.ember.children.forEach((c) => {
        if (c.isPointLight) {
          c.intensity = 0.5 + Math.random() * 0.3;
        }
      });
    }
  }

  start() {
    this.object.visible = true;
    this.setEmberVisible(false);
    this.smokeAction?.reset();
    this.smokeAction?.play();
    this.smokePlaying = true;
    this.smokeEmitter?.startTrail(this.getEmberObject());
  }

  pause() {
    if (!this.smokeAction) return;
    this.cachedSmokeTime = this.smokeAction.time;
    this.smokeAction.paused = true;
    this.setEmberVisible(false);
    this.smokeEmitter?.startTrail(this.getEmberObject());
  }

  resume() {
    if (!this.smokeAction) return;
    this.smokeAction.paused = false;
    this.smokeAction.time = this.cachedSmokeTime;
    this.smokeAction.play();
    this.setEmberVisible(true);
    this.smokeEmitter?.stopTrail();
  }

  stop() {
    this.smokeAction?.stop();
    this.smokeAction?.reset();
    this.smokePlaying = false;
    this.cachedSmokeTime = 0;
    this.object.visible = false;
    this.setEmberVisible(false);
    this.smokeEmitter?.stopTrail();
  }

  setEmberVisible(visible) {
    if (this.emberLight) this.emberLight.visible = visible;
    if (this.ember) this.ember.visible = visible;
  }

  getEmberObject() {
    return this.object.getObjectByName("ember");
  }
}

class CigBot {
  constructor(gltf, scene, smokeEmitter, onReady, onFinishSmoking) {
    this.scene = scene;
    this.model = gltf.scene;
    this.mixer = new THREE.AnimationMixer(this.model);
    this.actions = {};
    this.currentAction = null;
    this.bulbLight = null;
    this.blinkIntervalId = null;

    scene.add(this.model);
    this.model.rotation.y = Math.PI / 2;

    const bulbBone = this.model.getObjectByName("head");
    if (bulbBone) {
      this.bulbLight = new THREE.PointLight(0xffcc66, 10, 10);
      this.bulbLight.position.set(0, 3, 0);
      this.bulbLight.visible = false;
      bulbBone.add(this.bulbLight);
    }

    gltf.animations.forEach((clip) => {
      const action = this.mixer.clipAction(clip);
      if (
        clip.name === "idle" ||
        clip.name === "smoke_idle" ||
        clip.name === "cigarette_idle"
      ) {
        action.setLoop(THREE.LoopRepeat, Infinity);
      } else {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
      }
      this.actions[clip.name] = action;
    });

    const handR = this.model.getObjectByName("handr");

    // Load cigarette
    const cigLoader = new GLTFLoader();
    cigLoader.load("models/cigarette.glb", (cigGltf) => {
      this.cigarette = new Cigarette(
        cigGltf,
        handR,
        smokeEmitter,
        onFinishSmoking
      );
      onReady?.(); // let outer code know we’re fully ready
    });

    this.scheduleBlink();
    this.play("idle");
  }

  scheduleBlink() {
    // Clear any existing timeout to prevent overlap
    if (this.blinkTimeoutId) {
      clearTimeout(this.blinkTimeoutId);
      this.blinkTimeoutId = null;
    }

    const blinkAction = this.actions["blink"];
    if (!blinkAction) return;

    blinkAction.reset();
    blinkAction.enabled = true;
    blinkAction.setEffectiveWeight(1);
    blinkAction.setLoop(THREE.LoopOnce, 1);
    blinkAction.clampWhenFinished = true;
    blinkAction.timeScale = 1;
    blinkAction.play();

    const handler = (e) => {
      if (e.action === blinkAction) {
        this.mixer.removeEventListener("finished", handler);

        // Queue next blink randomly
        this.blinkTimeoutId = setTimeout(
          () => this.scheduleBlink(),
          1000 + Math.random() * 2000
        );
      }
    };

    this.mixer.addEventListener("finished", handler);
  }

  update(delta, isDragging) {
    this.mixer.update(delta);
    this.cigarette?.update(delta, isDragging);
  }

  play(name, fade = true, onFinished = null, speed = 1) {
    const nextAction = this.actions[name];
    if (!nextAction) return;

    if (this.currentAction) {
      if (fade) this.currentAction.fadeOut(0.2);
      else this.currentAction.stop();
    }

    nextAction.reset();
    nextAction.enabled = true;
    nextAction.paused = false;
    nextAction.timeScale = speed;

    if (fade) nextAction.fadeIn(0.2).play();
    else nextAction.play();

    this.currentAction = nextAction;

    // Clear previous listener if one exists
    if (this._currentFinishHandler) {
      this.mixer.removeEventListener("finished", this._currentFinishHandler);
      this._currentFinishHandler = null;
    }

    if (onFinished) {
      const handler = (e) => {
        if (e.action === nextAction) {
          this.mixer.removeEventListener("finished", handler);
          this._currentFinishHandler = null;
          onFinished();
        }
      };
      this._currentFinishHandler = handler;
      this.mixer.addEventListener("finished", handler);
    }
  }

  playIdleInterjection() {
    const interjections = ["cigarette_idle.001", "cigarette_idle.002"];
    const pick =
      interjections[Math.floor(Math.random() * interjections.length)];
    const interjection = this.actions[pick];
    const idle = this.actions["cigarette_idle"];
    if (!interjection || !idle) return;

    this.play(pick, true, () => {
      this.play("cigarette_idle", true);
    });
  }

  getHeadBone() {
    return this.model.getObjectByName("head");
  }

  getCigarette() {
    return this.cigarette;
  }

  getLight() {
    return this.bulbLight;
  }
}

let scene, camera, renderer, controls, clock;
let dragBtn, endBtn, startBtn;
let isDragging = false;
let dragStartTime = null;
let interjectionTimeoutId = null;
let isSmokingFinished = false;

let cigBot;
let smokeEmitter;

const environments = [
  { name: "plaza", url: "exr/plaza.exr" },
  { name: "parking garage", url: "exr/parkinggarage.exr" },
  { name: "night park", url: "exr/nightpark.exr" },
  { name: "parking lot", url: "exr/parkinglot.exr" },
  { name: "beach", url: "exr/beach.exr" },
  { name: "day park", url: "exr/daypark.exr" },
  { name: "river", url: "exr/river.exr" },
  { name: "boat", url: "exr/boat.exr" },
  { name: "town square", url: "exr/townsquare.exr" },
  { name: "woods", url: "exr/woods.exr" },
];

function getSavedEnvironmentIndex() {
  const match = document.cookie.match(/envIndex=(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}
function saveEnvironmentIndex(index) {
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `envIndex=${index}; expires=${expires}; path=/`;
}

let currentEnvIndex = getSavedEnvironmentIndex() ?? 0;

const exrLoader = new EXRLoader();
function loadEnvironment(index) {
  const env = environments[index];
  exrLoader.load(env.url, (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = texture;

    const label = document.getElementById("locationLabel");
    if (label) label.textContent = env.name;
  });
}
loadEnvironment(currentEnvIndex);

init();
document.getElementById("shuffleBtn").addEventListener("click", () => {
  currentEnvIndex = (currentEnvIndex + 1) % environments.length;
  saveEnvironmentIndex(currentEnvIndex);
  loadEnvironment(currentEnvIndex);
});

// Initialize the scene, camera, renderer, models, and controls
function init() {
  scene = new THREE.Scene();
  clock = new THREE.Clock();

  dragBtn = document.getElementById("dragBtn");
  endBtn = document.getElementById("endBtn");
  startBtn = document.getElementById("startBtn");

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(13, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 3.3, 0);

  // Restrict to horizontal rotation only
  controls.minPolarAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI / 2;
  controls.enableZoom = false;
  controls.enablePan = false;

  // Load HDRI
  loadEnvironment(currentEnvIndex);

  smokeEmitter = new SmokeEmitter("images/smokesheet.png", scene, camera);

  // Load models
  const botLoader = new GLTFLoader();
  botLoader.load("models/cigbot.glb", (gltf) => {
    cigBot = new CigBot(
      gltf,
      scene,
      smokeEmitter,
      () => {
        // Only show UI once cigBot + cigarette is ready
        startBtn.style.display = "inline-block";
      },
      endSmoking
    );
  });

  function scheduleIdleInterjection() {
    if (interjectionTimeoutId) {
      clearTimeout(interjectionTimeoutId);
      interjectionTimeoutId = null;
    }

    interjectionTimeoutId = setTimeout(() => {
      if (
        cigBot.currentAction?.getClip().name === "cigarette_idle" &&
        !isDragging &&
        smokeEmitter.scheduledPuff === null
      ) {
        cigBot.playIdleInterjection();
        scheduleIdleInterjection(); // only reschedule after playing
      } else {
        scheduleIdleInterjection(); // check again later
      }
    }, 5000 + Math.random() * 10000);
  }

  // UI Controls
  const onSmokeStart = () => {
    isSmokingFinished = false;
    isDragging = false;
    cigBot.getCigarette().start();
    setTimeout(() => {
      cigBot.getCigarette().setEmberVisible(false);
    }, 3000);

    cigBot.play(
      "smoke",
      true,
      () => {
        startBtn.style.display = "none";
        dragBtn.style.display = "inline-block";
        endBtn.style.display = "inline-block";
        cigBot.play("cigarette_idle", true);
        scheduleIdleInterjection();
      },
      2
    );
  };
  const onDragStart = () => {
    if (isSmokingFinished) return;
    dragStartTime = performance.now();
    cigBot.play(
      "smoke_inhale",
      true,
      () => {
        cigBot.play("smoke_idle", true);
        isDragging = true;
        cigBot.getLight().visible = true;
        cigBot.getCigarette().setEmberVisible(true);

        const cig = cigBot.getCigarette();
        if (cig.smokePlaying) {
          cig.resume();
        } else {
          cig.start();
        }
      },
      2
    );
  };
  const onDragEnd = () => {
    if (isSmokingFinished) return;
    isDragging = false;
    cigBot.play(
      "smoke_exhale",
      true,
      () => {
        cigBot.play("cigarette_idle", true);
        scheduleIdleInterjection();
      },
      2
    );
    cigBot.getLight().visible = false;
    cigBot.getCigarette().setEmberVisible(false);

    cigBot.getCigarette().pause();

    const dragDuration = (performance.now() - dragStartTime) / 1000;
    smokeEmitter.scheduleHeadPuff(cigBot.getHeadBone(), dragDuration);
  };
  const onSmokeEnd = () => {
    endSmoking();
  };

  dragBtn.addEventListener("mousedown", onDragStart);
  dragBtn.addEventListener("touchstart", onDragStart);

  dragBtn.addEventListener("mouseup", onDragEnd);
  dragBtn.addEventListener("touchend", onDragEnd);

  startBtn.addEventListener("mousedown", onSmokeStart);
  startBtn.addEventListener("touchstart", onSmokeStart);

  endBtn.addEventListener("mousedown", onSmokeEnd);
  endBtn.addEventListener("touchstart", onSmokeEnd);

  // Helper function to complete smoking
  function endSmoking() {
    if (isSmokingFinished) return;
    isSmokingFinished = true;
    if (!cigBot.getCigarette().object.visible && !isDragging) return;

    if (isDragging) {
      const dragDuration = (performance.now() - dragStartTime) / 1000;
      smokeEmitter.scheduleHeadPuff(cigBot.getHeadBone(), dragDuration);
      isDragging = false;
    }

    dragBtn.style.display = "none";
    endBtn.style.display = "none";

    cigBot.getLight().visible = false;
    cigBot.getCigarette().pause();

    const reverse = cigBot.actions["smoke"];
    if (reverse) {
      reverse.reset();
      reverse.setLoop(THREE.LoopOnce, 1);
      reverse.timeScale = -1;
      reverse.time = reverse.getClip().duration;
      reverse.clampWhenFinished = true;

      if (cigBot.currentAction && cigBot.currentAction !== reverse) {
        cigBot.currentAction.crossFadeTo(reverse, 0.3, false);
      }

      cigBot.currentAction = reverse;
      reverse.play();

      cigBot.mixer.addEventListener("finished", function handler(e) {
        if (e.action === reverse) {
          cigBot.mixer.removeEventListener("finished", handler);
          cigBot.getCigarette().stop();
          cigBot.play("idle", true);
          startBtn.style.display = "inline-block";
        }
      });
    } else {
      cigBot.play("idle", true);
    }
  }

  animate();
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (cigBot) cigBot.update(delta, isDragging);
  if (smokeEmitter) smokeEmitter.update(delta);
  if (controls) controls.update();

  renderer.render(scene, camera);
}
