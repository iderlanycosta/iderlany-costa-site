import React, { useEffect, useRef, useState } from 'react';

// Get all images from the folder, and sort them to ensure correct video sequence order
const images = import.meta.glob('../imagens/*.avif', { eager: true, query: '?url', import: 'default' });
const imageArray = Object.values(images).sort((a, b) => {
    // Extract number from filename (e.g. "vídeo background deka_000.avif" -> 0)
    const aNum = parseInt(a.match(/(\d+)\.avif$/)?.[1] || '0', 10);
    const bNum = parseInt(b.match(/(\d+)\.avif$/)?.[1] || '0', 10);
    return aNum - bNum;
});

const FPS = 15;
const FRAME_INTERVAL = 1000 / FPS;

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
    const frameRef = useRef(0);
    const lastDrawTimeRef = useRef(0);
    const requestRef = useRef<number>();

    // Preload all images
    useEffect(() => {
        let isMounted = true;

        const loadImages = async () => {
            const imgElements: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (const src of imageArray) {
                const img = new Image();
                img.src = src;

                await new Promise((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        resolve(true);
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${src}`);
                        resolve(false);
                    };
                });

                imgElements.push(img);

                // As soon as we have enough images to start playing, or we're done, update state
                if (isMounted && (loadedCount === 10 || loadedCount === imageArray.length)) {
                    setLoadedImages([...imgElements]); // Update state carefully to avoid re-renders on every single image
                }
            }

            if (isMounted) {
                setLoadedImages(imgElements);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    // Animation loop
    useEffect(() => {
        if (loadedImages.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const animate = (time: number) => {
            if (lastDrawTimeRef.current === 0) {
                lastDrawTimeRef.current = time;
            }

            const deltaTime = time - lastDrawTimeRef.current;

            if (deltaTime >= FRAME_INTERVAL) {
                // Time to draw next frame

                // Ensure canvas matches display size to prevent stretching/blurring
                // but preserving aspect ratio via object-cover in CSS
                if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
                    canvas.width = canvas.clientWidth;
                    canvas.height = canvas.clientHeight;
                }

                const img = loadedImages[frameRef.current % loadedImages.length];

                if (img && img.complete && img.naturalWidth > 0) {
                    // Draw image covering the entire canvas (like object-fit: cover)
                    const canvasRatio = canvas.width / canvas.height;
                    const imgRatio = img.width / img.height;

                    let drawWidth = canvas.width;
                    let drawHeight = canvas.height;
                    let offsetX = 0;
                    let offsetY = 0;

                    // Ajuste de foco horizontal: 0.5 é exatamente o centro da imagem.
                    // Como no mobile a imagem é "fatiada" (crop), e a arte/atenção parecia estar à direita,
                    // usa-se um valor maior na versão mobile para deslocar a imagem para a esquerda
                    // e trazer o lado direito para o centro da tela. (ex: 0.75 ou 0.8)
                    const isMobile = canvas.width < 768;
                    const objectPositionX = isMobile ? 0.8 : 0.5;

                    if (canvasRatio > imgRatio) {
                        // Canvas is wider than image
                        drawHeight = canvas.width / imgRatio;
                        offsetY = (canvas.height - drawHeight) / 2;
                    } else {
                        // Canvas is taller than image
                        drawWidth = canvas.height * imgRatio;
                        offsetX = (canvas.width - drawWidth) * objectPositionX;
                    }

                    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                }

                frameRef.current = (frameRef.current + 1) % loadedImages.length;

                // Adjust lastDrawTime to maintain steady FPS even if a frame was delayed
                lastDrawTimeRef.current = time - (deltaTime % FRAME_INTERVAL);
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [loadedImages]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default AnimatedBackground;
