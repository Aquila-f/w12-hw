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

  test('buy three', () => {
    game.buy("p1", 1);
    game.buy("p2", 2);
    expect(game.price).toBe(290);
  });

  test('buy five', () => {
    game.buy("p1", 1);
    game.buy("p2", 1);
    game.buy("p3", 1);
    game.buy("p4", 1);
    game.buy("p5", 1);
    expect(game.price).toBe(375);
  });

  test('buy six', () => {
    game.buy("p1", 1);
    game.buy("p2", 1);
    game.buy("p3", 2);
    game.buy("p4", 1);
    game.buy("p5", 1);
    expect(game.price).toBe(475);
  });

  test('buy seven', () => {
    game.buy("p1", 1);
    game.buy("p2", 1);
    game.buy("p3", 2);
    game.buy("p4", 2);
    game.buy("p5", 1);
    expect(game.price).toBe(565);
  });
});
