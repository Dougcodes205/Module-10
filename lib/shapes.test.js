const { Circle, Triangle, Square } = require('./shapes');

test('Circle should render correctly', () => {
  const circle = new Circle();
  circle.setColor('green');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test('Triangle should render correctly', () => {
  const triangle = new Triangle();
  triangle.setColor('bisque');
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="bisque" />');
});

test('Square should render correctly', () => {
  const square = new Square();
  square.setColor('turquoise');
  expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="turquoise" />');
});