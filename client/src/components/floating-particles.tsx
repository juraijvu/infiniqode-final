import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingParticlesProps {
  className?: string;
}

export function FloatingParticles({ className }: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particleSystemsRef = useRef<THREE.Points[]>([]);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 100;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // Particle systems configuration
    const particleConfigs = [
      {
        count: 15000,
        size: 0.4,
        colorRange: { hue: [0.75, 0.9], sat: [0.7, 1], light: [0.5, 0.8] },
        rotationSpeed: 0.001,
        radius: { min: 10, max: 120 }
      },
      {
        count: 20000,
        size: 0.2,
        colorRange: { hue: [0.45, 0.65], sat: [0.6, 0.9], light: [0.4, 0.7] },
        rotationSpeed: 0.0008,
        radius: { min: 5, max: 140 }
      }
    ];

    // Create particle systems
    particleConfigs.forEach(config => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(config.count * 3);
      const colors = new Float32Array(config.count * 3);

      for (let i = 0; i < config.count; i++) {
        const i3 = i * 3;
        
        // Spherical distribution
        const radius = config.radius.min + Math.random() * (config.radius.max - config.radius.min);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        // Color based on distance
        const dist = Math.sqrt(x * x + y * y + z * z) / config.radius.max;
        const hue = THREE.MathUtils.lerp(config.colorRange.hue[0], config.colorRange.hue[1], dist);
        const sat = THREE.MathUtils.lerp(config.colorRange.sat[0], config.colorRange.sat[1], dist);
        const light = THREE.MathUtils.lerp(config.colorRange.light[0], config.colorRange.light[1], dist);

        const color = new THREE.Color().setHSL(hue, sat, light);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: config.size,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      points.userData = { rotationSpeed: config.rotationSpeed };
      
      scene.add(points);
      particleSystemsRef.current.push(points);
    });

    // Animation variables
    let time = 0;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate particle systems
      particleSystemsRef.current.forEach(system => {
        system.rotation.y += system.userData.rotationSpeed;
        system.rotation.x = Math.sin(time * 0.1) * 0.05;
      });

      // Camera movement
      camera.position.x = Math.sin(time * 0.15) * 3;
      camera.position.y = Math.cos(time * 0.2) * 2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      particleSystemsRef.current.forEach(system => {
        system.geometry.dispose();
        if (system.material instanceof THREE.Material) {
          system.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 50%,
          #1a0632 0%,
          #140426 25%,
          #0c021a 50%,
          #06020e 75%,
          #020108 100%
        )`
      }}
    />
  );
}