import ship from '../api/ship';

describe('Ship function Tests', () => {
  test('Ship function returns object with name, length, hit function, and isSunk function', () => {
    expect(ship('Aircraft Carrier', 5)).toEqual({
      name: 'Aircraft Carrier',
      length: 5,
      hitArray: [1, 1, 1, 1 , 1],
      hit: expect.any(Function),
      isSunk: expect.any(Function),
    });
  });
  test("Ship function doesn't accept wrong parameter types", () => {
    expect(ship('Aircraft Carrier', 'five')).toBe(
      'One or more parameters are of the wrong type',
    );
  });
});
