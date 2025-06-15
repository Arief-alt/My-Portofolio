import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const originalPositionsRef = useRef<Float32Array | null>(null);

    useEffect(() => {
        // Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        // particleCount is now fixed for dark mode
        const particleCount = 1500;

        // Position and color for dark mode only
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

            // Dark mode colors directly
            colors[i * 3] = 0.9;
            colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
            colors[i * 3 + 2] = 1.0;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        originalPositionsRef.current = positions.slice(); // Store original positions

        const particlesMaterial = new THREE.PointsMaterial({
            size: 1.5, // Dark mode size directly
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        particlesRef.current = particles;

        camera.position.z = 500;

        // Animation - Float only (no rotation)
        const animate = () => {
            requestAnimationFrame(animate);

            if (particlesRef.current) {
                const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
                const time = Date.now() * 0.0005; // Slow time factor

                for (let i = 0; i < particleCount; i++) {
                    // Gentle vertical floating movement
                    positions[i * 3 + 1] = (originalPositionsRef.current![i * 3 + 1] as number) + Math.sin(time + i) * 10;

                    // Subtle horizontal sway
                    positions[i * 3] = (originalPositionsRef.current![i * 3] as number) + Math.cos(time * 0.7 + i) * 5;
                }

                particlesRef.current.geometry.attributes.position.needsUpdate = true;
            }

            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);5

    return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ThreeDBackground;