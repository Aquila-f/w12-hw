import { Game } from './game';

describe('Game', () => {
  let game : Game;
  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });

  test('buy one', () => {
    game.buy("p1", 1);
    expect(game.price).toBe(100);
  });

  test('buy two', () => {
    game.buy("p1", 1);
    game.buy("p2", 1);
    expect(game.price).toBe(190);
  });
});
