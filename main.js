document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("hero-canvas");
    const ctx = canvas.getContext("2d");

    // There are 80 images, from 000 to 079
    const frameCount = 80;
    const images = [];
    let loadedImages = 0;

    // Configs
    const currentFrame = { index: 0 };
    let animationId;

    // Set Canvas size with High DPI / Retina support
    const resizeCanvas = () => {
        // Get the device pixel ratio, falling back to 1.
        const dpr = window.devicePixelRatio || 1;

        // Get the size of the canvas in CSS pixels.
        const rect = canvas.getBoundingClientRect();

        // Give the canvas pixel dimensions of their CSS
        // size multiplied by the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);

        // Re-draw current frame properly resized
        if (images[currentFrame.index] && images[currentFrame.index].complete) {
            drawFrame(images[currentFrame.index]);
        }
    };

    window.addEventListener("resize", resizeCanvas);

    // Pad numbers like 000, 001, etc.
    const currentFrameSrc = (index) => {
        const paddedIndex = index.toString().padStart(3, '0');
        // Make sure the path is strictly aligned with the file structure
        return `assets/32qydqpbv1rmy0cwhngssqyjmm_result__${paddedIndex}.jpg`;
    };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrameSrc(i);
        img.onload = () => {
            loadedImages++;
            if (i === 0) {
                // Initialize canvas dimensions properly after first load
                resizeCanvas();
                // Draw first frame immediately to avoid blank flash
                drawFrame(img);
            }
            if (loadedImages === frameCount) {
                // All images loaded, start animation
                startAnimation();
            }
        };
        images.push(img);
    }

    // Draw frame function to mimic object-fit: cover and object-position: right center
    function drawFrame(img) {
        if (!ctx || !img || !img.width) return;

        // Get logical Canvas dimensions ignoring the DPR scale we just set
        const canvasLogicWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasLogicHeight = canvas.height / (window.devicePixelRatio || 1);

        ctx.clearRect(0, 0, canvasLogicWidth, canvasLogicHeight);

        const canvasRatio = canvasLogicWidth / canvasLogicHeight;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, drawX, drawY;

        // We want object-fit cover
        if (canvasRatio > imgRatio) {
            // Canvas is wider than image
            drawWidth = canvasLogicWidth;
            drawHeight = canvasLogicWidth / imgRatio;
            drawX = 0;
            drawY = (canvasLogicHeight - drawHeight) / 2;
        } else {
            // Canvas is taller than image
            drawWidth = canvasLogicHeight * imgRatio;
            drawHeight = canvasLogicHeight;
            // Shift drawing to the right since the burger is typically in the center/right of these frames
            drawX = canvasLogicWidth - drawWidth;
            drawY = 0;
        }

        // Because of ctx.scale(dpr, dpr) earlier, we just draw using logical CSS pixels
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }

    // Animation Loop
    // Loop every 4-5 seconds. 80 frames over 4 seconds = 20fps. Let's do 24fps for smooth look 
    // Wait, 80 frames at 24fps = 3.33 seconds. Perfect.
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    function startAnimation() {
        requestAnimationFrame(renderLoop);
    }

    function renderLoop(time) {
        if (!lastTime) lastTime = time;
        const deltaTime = time - lastTime;

        if (deltaTime > interval) {
            currentFrame.index = (currentFrame.index + 1) % frameCount;
            drawFrame(images[currentFrame.index]);
            lastTime = time - (deltaTime % interval);
        }

        requestAnimationFrame(renderLoop);
    }
});
