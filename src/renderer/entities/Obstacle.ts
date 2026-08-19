export class Obstacle {
  x = 1200; type: 0|1 = 0; // 0 cactus, 1 ptero
  y = 135;
  update(speed: number) { this.x -= speed; }
  isOffscreen() { return this.x < -30; }
}
