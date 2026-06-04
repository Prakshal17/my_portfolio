'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CinematicLayer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create custom circular soft particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 200, 150, 0.8)'); // Warm orange center
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    // Particles Setup
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const color1 = new THREE.Color(0xffaa55); // Warm orange
    const color2 = new THREE.Color(0xffffff); // White

    for (let i = 0; i < particleCount; i++) {
      // Random positions spread across a wide area
      positions[i * 3] = (Math.random() - 0.5) * 300;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 150; // z

      // Mix between warm orange and white
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      // Random scales
      scales[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
      size: 4,
      map: createParticleTexture(),
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.05;
      mouseY = (event.clientY - windowHalfY) * 0.05;
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    // Animation Loop
    let time = 0;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.002;

      targetX = mouseX * 0.2;
      targetY = mouseY * 0.2;
      
      // Smooth camera interpolation (Parallax)
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Float particles slowly (Sine wave motion)
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Move Y slightly based on time and original X to create a wave
        positionsAttr.array[i3 + 1] += Math.sin(time * 2 + positionsAttr.array[i3]) * 0.05;
        // Move X slightly
        positionsAttr.array[i3] += Math.cos(time + positionsAttr.array[i3 + 1]) * 0.02;
      }
      positionsAttr.needsUpdate = true;

      particles.rotation.y = time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-10" />;
}
