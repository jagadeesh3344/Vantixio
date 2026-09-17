import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface InteractiveCoreProps {
  activeSection?: string;
}

export default function InteractiveCore({ activeSection = "hero" }: InteractiveCoreProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    activeSection,
    hoveredServiceType: "web" as string,
    contactSubmitted: false,
    contactSubmitTime: 0,
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    scrollInterp: 0,
    breathActive: false,
    breathFactor: 0,
    lastTime: 0
  });

  const [metrics, setMetrics] = useState({
    fps: 60,
    activeNodes: 1200,
    systemMode: "HERO // CORE",
    calibration: "0.1042_MS"
  });

  // Listen for custom interactive events from service hovers and contact submissions
  useEffect(() => {
    stateRef.current.activeSection = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const handleServiceHover = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.type) {
        stateRef.current.hoveredServiceType = customEvent.detail.type;
      }
    };

    const handleContactSubmit = () => {
      stateRef.current.contactSubmitted = true;
      stateRef.current.contactSubmitTime = Date.now();
    };

    window.addEventListener("vantixio_service_hover", handleServiceHover);
    window.addEventListener("vantixio_contact_submitted", handleContactSubmit);

    return () => {
      window.removeEventListener("vantixio_service_hover", handleServiceHover);
      window.removeEventListener("vantixio_contact_submitted", handleContactSubmit);
    };
  }, []);

  // Calibration statistics interval
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        fps: Math.round(58 + Math.random() * 3),
        calibration: `${(0.0984 + Math.random() * 0.008).toFixed(4)}_MS`
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // 1. Setup Three.js Context
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030303);
    scene.fog = new THREE.FogExp2(0x030303, 0.0065);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.04);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0xdfba73, 2.5, 120);
    mainLight.position.set(10, 10, 20);
    scene.add(mainLight);

    const accentLight = new THREE.PointLight(0x4c5e75, 1.8, 100);
    accentLight.position.set(-15, -10, 10);
    scene.add(accentLight);

    // 3. LAYER 1: ATMOSPHERE (Grid helper representing spatial guidelines)
    const gridGeometry = new THREE.PlaneGeometry(160, 160, 40, 40);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0xdfba73,
      wireframe: true,
      transparent: true,
      opacity: 0.035,
      blending: THREE.AdditiveBlending
    });
    const spatialGrid = new THREE.Mesh(gridGeometry, gridMaterial);
    spatialGrid.rotation.x = -Math.PI / 2.2;
    spatialGrid.position.y = -12;
    spatialGrid.position.z = -15;
    scene.add(spatialGrid);

    // 4. LAYER 2: STRUCTURE (Bespoke Geometric Architectures)
    // Hero: Tech Monument
    const monumentGroup = new THREE.Group();
    const ringMaterials: THREE.LineBasicMaterial[] = [];
    const ringCount = 3;
    for (let i = 0; i < ringCount; i++) {
      const radius = 5 + i * 2.2;
      const ringGeom = new THREE.RingGeometry(radius, radius + 0.05, 64);
      const ringMat = new THREE.LineBasicMaterial({
        color: i === 1 ? 0xdfba73 : 0x4c5e75,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending
      });
      ringMaterials.push(ringMat);
      const ring = new THREE.LineSegments(
        new THREE.EdgesGeometry(ringGeom),
        ringMat
      );
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      monumentGroup.add(ring);
    }
    scene.add(monumentGroup);

    // Services/Process: Construction frameworks
    const boxGroup = new THREE.Group();
    const boxGeom = new THREE.BoxGeometry(3, 3, 3);
    const boxMat = new THREE.MeshBasicMaterial({
      color: 0xdfba73,
      wireframe: true,
      transparent: true,
      opacity: 0.02,
      blending: THREE.AdditiveBlending
    });
    for (let i = 0; i < 8; i++) {
      const box = new THREE.Mesh(boxGeom, boxMat);
      box.position.set((i - 3.5) * 6, Math.sin(i) * 2, -5);
      boxGroup.add(box);
    }
    scene.add(boxGroup);

    // About: Minimal Platonic Solid
    const aboutGeom = new THREE.IcosahedronGeometry(8, 1);
    const aboutMat = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending
    });
    const aboutObject = new THREE.Mesh(aboutGeom, aboutMat);
    scene.add(aboutObject);

    // 5. LAYER 3: ENERGY (Vantixio Digital Universe Particle Pipeline)
    const particleCount = 1200;
    const initialPositions = new Float32Array(particleCount * 3);
    const activeColors = new Float32Array(particleCount * 3);
    const originalColors = new Float32Array(particleCount * 3);

    // Establish multi-state coordinates lists
    const statePositions: THREE.Vector3[][] = [];
    const numStates = 8;
    for (let s = 0; s < numStates; s++) {
      statePositions.push([]);
    }

    // High fidelity target parameters generator
    for (let i = 0; i < particleCount; i++) {
      const pct = i / particleCount;

      // State 0: HERO (Cylindrical volumetric architecture tower)
      const t0 = pct * Math.PI * 16;
      const r0 = 4.5 + Math.sin(pct * Math.PI * 4) * 1.5;
      const x0 = Math.cos(t0) * r0;
      const y0 = (pct - 0.5) * 18;
      const z0 = Math.sin(t0) * r0;
      statePositions[0].push(new THREE.Vector3(x0, y0, z0));

      // State 1: SERVICES (Digital Constellation Network)
      const x1 = ((i % 12) - 5.5) * 3.5 + (Math.random() - 0.5) * 1.5;
      const y1 = (Math.floor(i / 12) % 12 - 5.5) * 2.2 + (Math.random() - 0.5) * 1.5;
      const z1 = (Math.floor(i / 144) - 4) * 3;
      statePositions[1].push(new THREE.Vector3(x1, y1, z1));

      // State 2: ASHTONAVA (Luxury Boutique Waves)
      const x2 = ((i % 20) - 9.5) * 1.8;
      const z2 = (Math.floor(i / 20) % 20 - 9.5) * 1.5;
      const y2 = Math.sin(x2 * 0.25) * Math.cos(z2 * 0.25) * 3 - 3;
      statePositions[2].push(new THREE.Vector3(x2, y2, z2));

      // State 3: YESDHOBI (Operating Pipelines)
      const pipelineId = i % 4;
      const pipelineY = (pipelineId - 1.5) * 4.5;
      const progress = ((i + Math.random() * 200) % particleCount) / particleCount;
      const x3 = (progress - 0.5) * 32;
      const y3 = pipelineY + Math.sin(progress * Math.PI * 4) * 0.8;
      const z3 = Math.cos(progress * Math.PI * 4) * 1.2;
      statePositions[3].push(new THREE.Vector3(x3, y3, z3));

      // State 4: GRAMEENA (Agricultural Terrains & Solar Panchangam Orbit)
      let x4 = 0, y4 = 0, z4 = 0;
      if (i < 300) {
        // Celestial Panchangam rotating orbit track
        const angle = (i / 300) * Math.PI * 2;
        x4 = Math.cos(angle) * 7.5;
        y4 = Math.sin(angle) * 7.5;
        z4 = -2;
      } else {
        // Wavy crop/terrain rows
        const col = (i - 300) % 30;
        const row = Math.floor((i - 300) / 30);
        x4 = (col - 14.5) * 1.2;
        z4 = (row - 14) * 1.2;
        y4 = -4 + Math.sin(x4 * 0.3) * 1.4 + Math.sin(z4 * 0.3) * 1.4;
      }
      statePositions[4].push(new THREE.Vector3(x4, y4, z4));

      // State 5: PROCESS (Construction Grid frameworks)
      const x5 = Math.floor((i % 10) - 4.5) * 4.5;
      const y5 = Math.floor((Math.floor(i / 10) % 10) - 4.5) * 4.5;
      const z5 = Math.floor(i / 100 - 6) * 3;
      statePositions[5].push(new THREE.Vector3(x5, y5, z5));

      // State 6: ABOUT (Emotional stillness - Wide sparse dust)
      const r6 = 18 + Math.random() * 20;
      const theta6 = Math.random() * Math.PI * 2;
      const phi6 = Math.random() * Math.PI;
      const x6 = r6 * Math.sin(phi6) * Math.cos(theta6);
      const y6 = r6 * Math.sin(phi6) * Math.sin(theta6);
      const z6 = r6 * Math.cos(phi6) - 10;
      statePositions[6].push(new THREE.Vector3(x6, y6, z6));

      // State 7: CONTACT (Convergence gravitational center)
      const theta7 = pct * Math.PI * 18;
      const radius7 = 0.5 + Math.pow(pct, 2) * 15;
      const x7 = Math.cos(theta7) * radius7;
      const y7 = Math.sin(theta7) * radius7;
      const z7 = (pct - 0.5) * 6;
      statePositions[7].push(new THREE.Vector3(x7, y7, z7));
    }

    // Prepare active geometry
    for (let i = 0; i < particleCount; i++) {
      const v = statePositions[0][i];
      initialPositions[i * 3] = v.x;
      initialPositions[i * 3 + 1] = v.y;
      initialPositions[i * 3 + 2] = v.z;

      // Color scheme default (Slate steel)
      activeColors[i * 3] = 0.3;
      activeColors[i * 3 + 1] = 0.37;
      activeColors[i * 3 + 2] = 0.46;

      originalColors[i * 3] = 0.3;
      originalColors[i * 3 + 1] = 0.37;
      originalColors[i * 3 + 2] = 0.46;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(initialPositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(activeColors, 3));

    // Custom Canvas procedural glowing circle particle sprite
    const createCircleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 16;
      pCanvas.height = 16;
      const pCtx = pCanvas.getContext("2d");
      if (pCtx) {
        const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        grad.addColorStop(0.7, "rgba(255, 255, 255, 0.1)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0.0)");
        pCtx.fillStyle = grad;
        pCtx.beginPath();
        pCtx.arc(8, 8, 8, 0, Math.PI * 2);
        pCtx.fill();
      }
      const pTexture = new THREE.CanvasTexture(pCanvas);
      return pTexture;
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const universeParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(universeParticles);

    // 6. Mouse Interaction Capture
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      stateRef.current.mouse.targetX = (relativeX / width - 0.5) * 8;
      stateRef.current.mouse.targetY = -(relativeY / height - 0.5) * 8;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 7. Interactive animation and scroll calculations loop
    let animationFrameId = 0;

    const renderLoop = (time: number) => {
      const delta = time - stateRef.current.lastTime;
      stateRef.current.lastTime = time;

      // Mouse inertia smoothing
      const mouse = stateRef.current.mouse;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Global Scroll position interpolation mapping
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const globalProgress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      
      // Map global progress to consecutive transition states (0 through 7)
      const targetScrollInterp = globalProgress * (numStates - 1);
      stateRef.current.scrollInterp += (targetScrollInterp - stateRef.current.scrollInterp) * 0.06;
      const scrollInterp = stateRef.current.scrollInterp;

      // Set metrics system state text
      let modeText = "HERO // TOWER";
      if (scrollInterp > 0.8) modeText = "SERVICES // GRAPH";
      if (scrollInterp > 1.8) modeText = "LUXURY // BOUTIQUE";
      if (scrollInterp > 2.8) modeText = "BUSINESS // OS";
      if (scrollInterp > 3.8) modeText = "AGRICULTURAL // INTEL";
      if (scrollInterp > 4.8) modeText = "ENGINEERING // GRID";
      if (scrollInterp > 5.8) modeText = "MINIMAL // SOUL";
      if (scrollInterp > 6.8) modeText = "CONVERGENCE // LIGHT";

      // 8. SIGNATURE VISUAL MOMENT (Cinematic breath transition around midpoint)
      // Occurs at the midpoint of the site (between YesDhobi and Grameena transitions, i.e. around scrollInterp = 3.5)
      const midpoint = 3.5;
      const distToMidpoint = Math.abs(scrollInterp - midpoint);
      let breathActive = false;
      let breathFactor = 0;

      if (distToMidpoint < 0.25) {
        breathActive = true;
        // Construct peak implosion then massive structural expand wave
        // normalized relative to the peak width
        const ratio = (scrollInterp - (midpoint - 0.25)) / 0.5; // goes 0 to 1
        if (ratio < 0.5) {
          // Implosion stage: pull points tight to center
          breathFactor = ratio * 2; // goes 0 to 1
        } else {
          // Explosion expansion stage: push out
          breathFactor = -Math.sin((ratio - 0.5) * Math.PI) * 1.8;
        }
      }
      stateRef.current.breathActive = breathActive;
      stateRef.current.breathFactor = breathFactor;

      // 9. Particles Coordinates Interpolation (Morphing logic)
      const posAttr = particleGeometry.getAttribute("position") as THREE.BufferAttribute;
      const colorAttr = particleGeometry.getAttribute("color") as THREE.BufferAttribute;

      const baseStateIdx = Math.floor(scrollInterp);
      const nextStateIdx = Math.min(numStates - 1, baseStateIdx + 1);
      const stateAlpha = scrollInterp - baseStateIdx;

      // Color themes interpolation definitions
      const slateColor = new THREE.Color(0x4c5e75);
      const silverColor = new THREE.Color(0x718096);
      const champagneColor = new THREE.Color(0xdfba73);
      const tealColor = new THREE.Color(0x407c85);
      const greenColor = new THREE.Color(0x6e876e);
      const metallicColor = new THREE.Color(0x5c6a7a);
      const darkColor = new THREE.Color(0x1a1a1a);

      const stateColors = [
        slateColor,      // 0. Hero
        silverColor,     // 1. Services
        champagneColor,  // 2. Ashtonava
        tealColor,       // 3. YesDhobi
        greenColor,      // 4. Grameena
        metallicColor,   // 5. Process
        darkColor,       // 6. About
        champagneColor   // 7. Contact
      ];

      const currentColorTheme = new THREE.Color().lerpColors(
        stateColors[baseStateIdx],
        stateColors[nextStateIdx],
        stateAlpha
      );

      // Contact form submitted override: perfect silence & brightness
      let isSubmittedAndActive = false;
      let submitAge = 0;
      if (stateRef.current.contactSubmitted) {
        submitAge = (Date.now() - stateRef.current.contactSubmitTime) / 1000;
        if (submitAge < 3.5) {
          isSubmittedAndActive = true;
        } else {
          stateRef.current.contactSubmitted = false;
        }
      }

      // Read active service hover state for customized network adjustments
      const hoveredType = stateRef.current.hoveredServiceType;

      for (let i = 0; i < particleCount; i++) {
        const v1 = statePositions[baseStateIdx][i];
        const v2 = statePositions[nextStateIdx][i];

        // Core linear morph coordinates
        let tx = v1.x + (v2.x - v1.x) * stateAlpha;
        let ty = v1.y + (v2.y - v1.y) * stateAlpha;
        let tz = v1.z + (v2.z - v1.z) * stateAlpha;

        // Custom continuous ambient motion adjustments per section
        if (baseStateIdx === 0) {
          // Hero swirling vortex
          const offsetAngle = time * 0.0003 + (i * 0.01);
          tx += Math.cos(offsetAngle) * 0.4;
          tz += Math.sin(offsetAngle) * 0.4;
        } else if (baseStateIdx === 1) {
          // Services interactive hover configurations
          if (hoveredType === "mobile") {
            // Re-align particles to form vertical screen borders
            tx += Math.sin(i * 0.1) * 0.6;
          } else if (hoveredType === "ai") {
            // Converge slightly towards cluster center
            tx *= 0.88;
            ty *= 0.88;
          } else if (hoveredType === "backend") {
            // Direct into sharp, rectangular layered grids
            tx = Math.round(tx * 0.5) * 2;
          }
        } else if (baseStateIdx === 3) {
          // YesDhobi fluid stream transport moving left-to-right
          const flowSpeed = 0.001 * (1 + (i % 3));
          let currentX = tx + (time * flowSpeed) % 25;
          if (currentX > 16) currentX = -16 + (currentX % 16);
          tx = currentX;
        } else if (baseStateIdx === 4) {
          // Grameena Agricultural waves
          ty += Math.sin(tx * 0.2 + time * 0.001) * 0.5;
        }

        // Apply visual midpoint cinematic breath force
        if (breathActive) {
          if (breathFactor > 0) {
            // Implode
            tx *= (1 - breathFactor * 0.85);
            ty *= (1 - breathFactor * 0.85);
            tz *= (1 - breathFactor * 0.85);
          } else {
            // Explode outwards
            const radius = Math.sqrt(tx*tx + ty*ty + tz*tz) || 1.0;
            const dirX = tx / radius;
            const dirY = ty / radius;
            const dirZ = tz / radius;
            tx += dirX * (-breathFactor * 6);
            ty += dirY * (-breathFactor * 6);
            tz += dirZ * (-breathFactor * 6);
          }
        }

        // Apply submission reaction (Perfect stillness contracting to center)
        if (isSubmittedAndActive) {
          if (submitAge < 1.5) {
            // Fast implode to center
            const pull = Math.min(1.0, submitAge / 1.0);
            tx *= (1.0 - pull * 0.96);
            ty *= (1.0 - pull * 0.96);
            tz *= (1.0 - pull * 0.96);
          } else {
            // Hold and slowly expand back
            const release = Math.min(1.0, (submitAge - 1.5) / 2.0);
            tx = tx * 0.04 + tx * 0.96 * release;
            ty = ty * 0.04 + ty * 0.96 * release;
            tz = tz * 0.04 + tz * 0.96 * release;
          }
        }

        // Interpolate individual coordinates
        const idx3 = i * 3;
        posAttr.array[idx3] += (tx - posAttr.array[idx3]) * 0.08;
        posAttr.array[idx3 + 1] += (ty - posAttr.array[idx3 + 1]) * 0.08;
        posAttr.array[idx3 + 2] += (tz - posAttr.array[idx3 + 2]) * 0.08;

        // Apply color gradient parameters
        let rColor = currentColorTheme.r;
        let gColor = currentColorTheme.g;
        let bColor = currentColorTheme.b;

        // Brighten central nodes briefly during active transitions
        if (i % 20 === 0) {
          rColor = Math.min(1.0, rColor + 0.15);
          gColor = Math.min(1.0, gColor + 0.15);
          bColor = Math.min(1.0, bColor + 0.15);
        }

        if (isSubmittedAndActive && submitAge < 1.8) {
          // Substituted golden flash flare
          rColor = 0.87;
          gColor = 0.73;
          bColor = 0.45;
        }

        colorAttr.array[idx3] += (rColor - colorAttr.array[idx3]) * 0.1;
        colorAttr.array[idx3 + 1] += (gColor - colorAttr.array[idx3 + 1]) * 0.1;
        colorAttr.array[idx3 + 2] += (bColor - colorAttr.array[idx3 + 2]) * 0.1;
      }

      posAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;

      // 10. Rotate Secondary Architectures based on scroll status
      const normalRotSpeed = time * 0.00018;
      
      // Hero monument slow orbital swing
      monumentGroup.rotation.y = normalRotSpeed;
      monumentGroup.rotation.x = normalRotSpeed * 0.3 + mouse.y * 0.05;
      
      // Rotate other assemblies
      boxGroup.rotation.y = -normalRotSpeed * 0.5;
      boxGroup.rotation.z = mouse.x * 0.04;

      aboutObject.rotation.y = normalRotSpeed * 0.4;
      aboutObject.rotation.x = normalRotSpeed * 0.2;

      // Fade opacities based on current section proximity to prevent visual clutter
      const heroOpacity = Math.max(0, 1 - scrollInterp);
      ringMaterials.forEach(m => {
        m.opacity = heroOpacity * 0.18;
      });

      const servicesProcessOpacity = Math.max(0, Math.sin(scrollInterp * Math.PI / 5)) * 0.04;
      boxMat.opacity = servicesProcessOpacity;

      const aboutOpacity = scrollInterp > 5.0 && scrollInterp < 6.8 
        ? Math.max(0, 1.0 - Math.abs(scrollInterp - 6.0)) * 0.15 
        : 0;
      aboutMat.opacity = aboutOpacity;

      // Camera Position & Angle interpolations (smooth tracking)
      const targetCamY = mouse.y * 0.8;
      const targetCamX = mouse.x * 0.8;
      
      // Position camera deeper during process & convergence
      let targetCamZ = 30;
      if (scrollInterp > 4.5 && scrollInterp < 5.5) {
        // Deep camera dive during process framework grid construction
        targetCamZ = 22 + Math.sin(time * 0.0002) * 3;
      } else if (scrollInterp > 6.5) {
        // High proximity center pull during convergence stage
        targetCamZ = 24 - (scrollInterp - 6.5) * 4;
      }

      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.lookAt(0, 0, 0);

      // Submit reaction point-light flash flare
      if (isSubmittedAndActive) {
        if (submitAge < 1.2) {
          mainLight.intensity = 2.5 + (1.2 - submitAge) * 12.0;
        } else {
          mainLight.intensity = 2.5 + (3.5 - submitAge) * 0.5;
        }
      } else {
        mainLight.intensity = 2.5 + Math.sin(time * 0.001) * 0.3;
      }

      // Slowly drift spatial guidelines grid background
      spatialGrid.position.z = -15 + Math.sin(time * 0.0001) * 4;
      spatialGrid.rotation.z = time * 0.00005;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    // 11. Handle Resizes
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Cleanup WebGL resources cleanly
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      
      // Dispose materials & geometries to prevent memory leaks
      gridGeometry.dispose();
      gridMaterial.dispose();
      boxGeom.dispose();
      boxMat.dispose();
      aboutGeom.dispose();
      aboutMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      ringMaterials.forEach(m => m.dispose());
      monumentGroup.clear();
      boxGroup.clear();
      
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full pointer-events-none select-none opacity-90 overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="block h-full w-full bg-transparent" />
      
      {/* Precision system telemetry dashboard */}
      <div className="absolute right-8 top-28 z-10 hidden flex-col gap-1 text-[9px] font-display text-zinc-600 md:flex select-none">
        <div className="flex items-center gap-2 border-b border-zinc-900 pb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dfba73]/80 animate-pulse"></span>
          <span className="text-zinc-400 font-semibold tracking-wider">VANTIXIO_UNIVERSE_SLA</span>
        </div>
        <div>SYS_MODE: <span className="text-zinc-400 font-mono font-bold">{metrics.systemMode}</span></div>
        <div>ENGINE_FPS: <span className="text-zinc-400 font-mono font-bold">{metrics.fps}</span></div>
        <div>CALIBRATION: <span className="text-zinc-400 font-mono font-semibold">{metrics.calibration}</span></div>
        <div>DENSITY: <span className="text-[#dfba73] font-mono">{metrics.activeNodes} NODES</span></div>
        <div className="text-[#dfba73]/70 font-mono tracking-widest text-[8px] uppercase">RENDER_STATE_OK_100</div>
      </div>
    </div>
  );
}
