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
  const mouseRef = useRef(new THREE.Vector3(0, 0, 0));
  const targetMouseRef = useRef(new THREE.Vector3(0, 0, 0));

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

    // Particle systems configuration - faded white stars
    const particleConfigs = [
      {
        count: 8000,  // Reduced count to be less intrusive
        size: 0.15,   // Smaller size
        opacity: 0.3, // Faded opacity
        rotationSpeed: 0.0005,
        radius: { min: 20, max: 150 }
      },
      {
        count: 5000,  // Reduced count
        size: 0.1,    // Very small
        opacity: 0.2, // Very faded
        rotationSpeed: 0.0003,
        radius: { min: 10, max: 120 }
      }
    ];

    // Create particle systems with faded white color
    particleConfigs.forEach(config => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(config.count * 3);
      const colors = new Float32Array(config.count * 3);
      const basePositions = new Float32Array(config.count * 3);

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

        // Store base positions for mouse interaction
        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = z;

        // Light white color with subtle variation
        const brightness = 0.8 + Math.random() * 0.2; // 0.8 to 1.0
        colors[i3] = brightness;     // R
        colors[i3 + 1] = brightness; // G
        colors[i3 + 2] = brightness; // B
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: config.size,
        vertexColors: true,
        transparent: true,
        opacity: config.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      points.userData = { 
        rotationSpeed: config.rotationSpeed,
        basePositions,
        velocities: new Float32Array(config.count * 3)
      };
      
      scene.add(points);
      particleSystemsRef.current.push(points);
    });

    // Purple light effect that follows cursor - using a plane with radial gradient texture
    const lightGeometry = new THREE.PlaneGeometry(40, 40);
    
    // Create a texture for the light effect
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create radial gradient for soft, blurred light effect
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.8)');     // Bright purple center
    gradient.addColorStop(0.2, 'rgba(124, 58, 237, 0.6)');   // Strong purple
    gradient.addColorStop(0.4, 'rgba(124, 58, 237, 0.3)');   // Medium purple
    gradient.addColorStop(0.7, 'rgba(124, 58, 237, 0.1)');   // Faded purple
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');       // Transparent edges
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    const lightTexture = new THREE.CanvasTexture(canvas);
    
    const lightMaterial = new THREE.MeshBasicMaterial({
      map: lightTexture,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    
    const purpleLight = new THREE.Mesh(lightGeometry, lightMaterial);
    scene.add(purpleLight);

    // Animation variables
    let time = 0;
    const mouseRadius = 25;

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse coordinates to 3D space
      targetMouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      const vector = new THREE.Vector3(targetMouseRef.current.x, targetMouseRef.current.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      targetMouseRef.current.copy(pos);
    };

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth mouse following
      mouseRef.current.lerp(targetMouseRef.current, 0.05);

      // Update purple light position to follow cursor
      purpleLight.position.copy(mouseRef.current);
      purpleLight.position.z = 0;

      // Rotate particle systems slowly
      particleSystemsRef.current.forEach(system => {
        const positions = system.geometry.attributes.position.array as Float32Array;
        const { basePositions, velocities } = system.userData;
        const totalParticles = positions.length / 3;

        // Update particle positions based on mouse proximity
        for (let i = 0; i < totalParticles; i++) {
          const i3 = i * 3;
          const px = positions[i3];
          const py = positions[i3 + 1];
          const pz = positions[i3 + 2];

          // Mouse interaction - gentle push away
          const mouseDist = mouseRef.current.distanceTo(new THREE.Vector3(px, py, pz));
          if (mouseDist < mouseRadius) {
            const forceStrength = (1 - mouseDist / mouseRadius) * 0.02; // Very gentle
            const forceDirection = new THREE.Vector3(px, py, pz).sub(mouseRef.current).normalize();
            
            velocities[i3] += forceDirection.x * forceStrength;
            velocities[i3 + 1] += forceDirection.y * forceStrength;
            velocities[i3 + 2] += forceDirection.z * forceStrength;
          }

          // Return to base position
          const returnForce = 0.01;
          velocities[i3] += (basePositions[i3] - px) * returnForce;
          velocities[i3 + 1] += (basePositions[i3 + 1] - py) * returnForce;
          velocities[i3 + 2] += (basePositions[i3 + 2] - pz) * returnForce;

          // Damping
          const damping = 0.95;
          velocities[i3] *= damping;
          velocities[i3 + 1] *= damping;
          velocities[i3 + 2] *= damping;

          // Update positions
          positions[i3] += velocities[i3];
          positions[i3 + 1] += velocities[i3 + 1];
          positions[i3 + 2] += velocities[i3 + 2];
        }

        system.geometry.attributes.position.needsUpdate = true;
        system.rotation.y += system.userData.rotationSpeed;
        system.rotation.x = Math.sin(time * 0.1) * 0.02;
      });

      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 1;
      camera.position.y = Math.cos(time * 0.15) * 1;
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
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
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
      
      lightMaterial.dispose();
      lightGeometry.dispose();
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