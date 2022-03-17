const dstColors = require('../dist').colors;
const tstColors = {
  Blue: '#0000ff',
  White: '#ffffff',
  Red: '#ff0000',
  Yellow: '#ffff00',
  Green: '#00ff00',
  Orange: '#ff9c00',
  Brown: '#715220',
  Pink: '#ff9af9',
  Black: '#000000',
  Grey: '#808080',
  Purple: '#a259a0',
  Gold: '#cbb732',
  Silver: '#e1e1e1',
} ;

test('Comparing test colors to dist colors', () => {
  expect(Object.keys(dstColors).length).toBeGreaterThan(0);
  expect(Object.keys(dstColors).length).toEqual(Object.keys(tstColors).length);
  Object.keys(tstColors).map((key) => expect(dstColors[key]).toBe(tstColors[key]));
});
