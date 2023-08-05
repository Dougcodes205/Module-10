const { generateLogo } = require('./svg');

test('generateLogo should return the correct SVG content', () => {
  const input = {
    text: 'SVG',
    textColor: 'white',
    shape: 'circle',
    shapeColor: 'green',
  };
  const svgContent = generateLogo(input);


  expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
});