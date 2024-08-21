const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

canvas.addEventListener('mouseleave', () => {
  c.reset();
  drawFace();
  drawEye();
});

canvas.addEventListener('mousemove', mouse => {
  let xOffset = mouse.offsetX;
  let yOffset = mouse.offsetY;

  c.reset();
  drawFace();

  drawMove(xOffset, yOffset);
});

// Draw Moving Eye
const drawMove = (x, y) => {
  let angle1 = Math.atan2(x - 310, y - 265);
  let angle2 = Math.atan2(x - 490, y - 265);

  c.translate(310, 265);
  c.rotate(-angle1);
  drawCircle(0, 30, 25, 'black');
  c.rotate(angle1);
  c.translate(-310, -265);

  c.translate(490, 265);
  c.rotate(-angle2);
  drawCircle(0, 30, 25, 'black');
  c.rotate(angle2);
  c.translate(-490, -265);
};

// Draw Face
const drawFace = () => {
  drawCircle(400, 320, 200, '#F5C800');

  // Draw Eyes
  drawCircle(310, 265, 65, 'white');
  drawCircle(490, 265, 65, 'white');
  // Draw Mouth
  c.beginPath();
  c.arc(400, 350, 100, 0.15 * Math.PI, 0.85 * Math.PI);
  c.lineWidth = '3';
  c.stroke();
};

// Draw Eye
const drawEye = () => {
  drawCircle(310, 265, 25, 'black');
  drawCircle(490, 265, 25, 'black');
};

const drawCircle = (x, y, radius, color) => {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2);
  c.fillStyle = color;
  c.fill();
};

drawFace();
drawEye();
