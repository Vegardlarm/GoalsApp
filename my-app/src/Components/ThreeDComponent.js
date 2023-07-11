import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDComponent = () => {
  const canvasRef = useRef(null);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const cubeRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    // Reduce the size of the renderer
    const width = 500;
    const height = 300;
    renderer.setSize(width, height);

    const geometry = new THREE.BoxGeometry(3, 3, 3); // Adjust the size of the cube
    const material = new THREE.MeshPhongMaterial({ color: 0x00aaff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // Adjust the ambient light color
    scene.add(ambientLight);

    // Adjust the camera position
    camera.position.z = 5;

    const rotateSpeed = 0.001; // Adjust the rotation speed

    const animate = () => {
      requestAnimationFrame(animate);

      // Update the cube's rotation based on user interaction
      cube.rotation.x += cubeRotation.current.x;
      cube.rotation.y += cubeRotation.current.y;

      renderer.render(scene, camera);
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      if (previousMousePosition.current.x !== 0 && previousMousePosition.current.y !== 0) {
        const deltaX = (clientX - previousMousePosition.current.x) * rotateSpeed;
        const deltaY = (clientY - previousMousePosition.current.y) * rotateSpeed;

        cubeRotation.current.x = deltaX;
        cubeRotation.current.y = deltaY;
      }

      previousMousePosition.current.x = clientX;
      previousMousePosition.current.y = clientY;
    };

    const handleMouseUp = () => {
      previousMousePosition.current.x = 0;
      previousMousePosition.current.y = 0;
      cubeRotation.current.x = 0;
      cubeRotation.current.y = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);

    animate();

   
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeDComponent;



