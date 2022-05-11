import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  test('buy one', () => {
    const game = new Game();
    game.buy(1);
    expect(game.price).toBe(100);
  });
});
