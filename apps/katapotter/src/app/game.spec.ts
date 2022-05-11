import { Game } from './game';

describe('Game', () => {

  test('buy one', () => {
    const game = new Game();
    game.buy(1);
    expect(game.price).toBe(100);
  });

  test('buy two', () => {
    const game = new Game();
    game.buy(2);
    expect(game.price).toBe(190);
  });
});
