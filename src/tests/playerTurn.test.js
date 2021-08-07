import playerTurn from "../api/playerTurn";

describe('Player turn tests', () => {
  test('Player turn function returns index', () => {
    expect(playerTurn(5)).toBe(5)
  })
})