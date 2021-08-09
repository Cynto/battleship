import turn from "../api/turn";

describe('Player turn tests', () => {
  test('Player turn function returns index', () => {
    expect(turn(5)).toBe(5)
  })
})