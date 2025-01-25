const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
  pixelsPerInch: 300,
  // orientation 'landscape'; Deprecated
  scaletofit: true,
  orientation: 'landscape',
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;


    // Declare variables
    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.02;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const offset = width * 0.02;

    let x, y;

    // Functions to draw shapes
    function bigSqare(i, j, w, h, x, y) {
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
    }
    function smallSquare(i, j, w, h, x, y) {
        context.beginPath();
        context.rect(x + offset / 2, y + offset / 2, w - offset, h - offset);
        context.stroke();
    }

    // Loop to call functions
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            x = ix + (w + gap) * i;
            y = iy + (w + gap) * j;
            
            bigSqare(i, j, w, h, x, y);
            if (Math.floor(Math.random() * 10) % 2 == 0) {
                smallSquare(i, j, w, h, x, y);
            }          
        }
    } 

  };
};

canvasSketch(sketch, settings);
