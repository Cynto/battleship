import PlaceAIBoats from '../api/BoatPlacement';

describe('AI Boat Placement Tests', () => {
  test('20 boat blocks are placed', () => {
    const AIGridArray = PlaceAIBoats();

    let AIBoatsLength = 0;
    for (let i = 0; i < AIGridArray.length; i += 1) {
      if (AIGridArray[i] === 3) {
        AIBoatsLength += 1;
      }
    }
   
    expect(AIBoatsLength).toBe(20);
  });
});
