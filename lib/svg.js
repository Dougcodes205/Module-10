const { Triangle, Circle, Square } = require('./shapes');

function generateLogo(input) {
  const { text, textColor, shape, shapeColor } = input;

  let selectedShape;

  if (shape === 'triangle') {
    selectedShape = new Triangle();
  } else if (shape === 'circle') {
    selectedShape = new Circle();
  } else if (shape === 'square') {
    selectedShape = new Square();
  } else {
    throw new Error('Invalid shape selected.');
  }

  selectedShape.setColor(shapeColor);

  const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent;
}

module.exports = { generateLogo };