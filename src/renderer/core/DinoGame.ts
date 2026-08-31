/**
 * Dino Runner — Chrome clone → Boy vs Animals, fixed loop & collision
 * Humanized: boy sprite, animals in middle, jump/crouch, score, game over
 */
export class DinoGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private score = 0;
  private speed = 6;
  private vy = 0;
  private y = 120;
  private grounded = true;
  private crouching = false;
  private gameOver = false;
  private frame = 0;
  private obstacles: {x:number; y:number; type:'ground'|'fly'; w:number; h:number; animal:string}[] = [];
  private boyFrame = 0;
  private lastSpawn = 0;

  constructor(containerId: string) {
    const c = document.getElementById(containerId) || document.body;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1200; this.canvas.height = 300;
    this.canvas.style.border = '2px solid #535353';
    this.canvas.style.background = '#fff';
    c.innerHTML = '';
    c.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')!;
    window.addEventListener('keydown', e => {
      if (this.gameOver && e.code === 'Space') { this.restart(); return; }
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (this.grounded && !this.gameOver) { this.vy = -12; this.grounded = false; this.crouching = false; }
      }
      if (e.code === 'ArrowDown') { if (!this.gameOver) this.crouching = true; }
    });
    window.addEventListener('keyup', e => { if (e.code === 'ArrowDown') this.crouching = false; });
    this.canvas.addEventListener('click', () => { if (this.gameOver) this.restart(); else if (this.grounded) { this.vy = -12; this.grounded = false; }});
  }

  start() { this.gameOver = false; requestAnimationFrame(this.loop.bind(this)); }

  private restart() {
    this.score = 0; this.speed = 6; this.y = 120; this.vy = 0; this.grounded = true; this.obstacles = []; this.gameOver = false; this.frame = 0;
    requestAnimationFrame(this.loop.bind(this));
  }

  private loop(now: number) {
    if (this.gameOver) { this.renderGameOver(); return; }
    this.frame++;
    this.boyFrame++;
    if (this.frame - this.lastSpawn > 90 + Math.random()*60) {
      const isFly = Math.random() > 0.65;
      const animal = isFly ? (Math.random()>0.5 ? '🦅' : '🦇') : (['🐶','🐱','🐰','🦊'][Math.floor(Math.random()*4)]);
      this.obstacles.push({
        x: 1200,
        y: isFly ? 100 + Math.random()*20 : 135,
        type: isFly ? 'fly' : 'ground',
        w: isFly ? 30 : 28,
        h: isFly ? 22 : 32,
        animal
      });
      this.lastSpawn = this.frame;
    }
    this.vy += 0.62;
    this.y += this.vy;
    if (this.y >= 120) { this.y = 120; this.vy = 0; this.grounded = true; }
    if (this.y < 0) { this.y = 0; this.vy = 0; }
    this.score += 0.2;
    if (this.frame % 400 === 0) this.speed += 0.25;
    this.obstacles.forEach(o => o.x -= this.speed);
    this.obstacles = this.obstacles.filter(o => o.x > -50);
    const boyBox = this.getBoyBox();
    for (const o of this.obstacles) {
      const obsBox = { x: o.x, y: o.y, w: o.w, h: o.h };
      if (this.isColliding(boyBox, obsBox)) {
        this.gameOver = true;
        break;
      }
    }
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  private getBoyBox() {
    const h = this.crouching ? 28 : 47;
    const y = this.crouching ? this.y + 19 : this.y;
    return { x: 80, y, w: 44, h };
  }

  private isColliding(a: {x:number,y:number,w:number,h:number}, b: {x:number,y:number,w:number,h:number}) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  private drawBoy(ctx: CanvasRenderingContext2D, x: number, y: number, crouching: boolean, frame: number) {
    const legSwap = Math.floor(frame / 6) % 2 === 0;
    ctx.fillStyle = '#ffdbac';
    ctx.fillRect(x+12, y, 20, 18);
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(x+10, y, 24, 6);
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x+6, y+18, 32, crouching ? 10 : 16);
    ctx.fillStyle = '#1d4ed8';
    const legH = crouching ? 8 : 13;
    if (crouching) {
      ctx.fillRect(x+8, y+28, 28, 8);
    } else {
      ctx.fillRect(x+8, y+34, 12, legH);
      ctx.fillRect(x+24, y+34, 12, legSwap ? legH-2 : legH);
    }
    ctx.fillStyle = '#000';
    ctx.fillRect(x+18, y+8, 3, 3); ctx.fillRect(x+26, y+8, 3, 3);
    ctx.fillStyle = '#ffdbac';
    const armY = legSwap ? y+20 : y+22;
    ctx.fillRect(x+2, armY, 8, 4); ctx.fillRect(x+34, armY+2, 8, 4);
  }

  private drawAnimal(ctx: CanvasRenderingContext2D, o: {x:number; y:number; w:number; h:number; animal:string}) {
    ctx.font = `${o.h}px serif`;
    ctx.textBaseline = 'top';
    ctx.fillText(o.animal, o.x, o.y);
  }

  private render() {
    const ctx = this.ctx;
    ctx.fillStyle = '#fff'; ctx.fillRect(0,0,1200,300);
    ctx.fillStyle = '#535353'; ctx.fillRect(0, 182, 1200, 2);
    ctx.fillStyle = '#e5e5e5';
    for (let i=0; i<6; i++) {
      const gx = (this.frame * this.speed * 0.2 + i*200) % 1200;
      ctx.fillRect(gx, 190, 16, 2);
    }
    this.drawBoy(ctx, 80, this.y, this.crouching, this.boyFrame);
    this.obstacles.forEach(o => this.drawAnimal(ctx, o));
    ctx.fillStyle = '#535353'; ctx.font = '14px monospace';
    ctx.fillText(`Score ${Math.floor(this.score)}`, 1050, 22);
    ctx.fillText(`Speed ${this.speed.toFixed(1)}`, 1050, 38);
    ctx.font = '11px monospace'; ctx.fillText(`JUMP: Space/↑  CROUCH: ↓  (avoid animals in middle)`, 12, 22);
    if (Math.floor(this.score/800)%2===1) { ctx.fillStyle='rgba(0,0,0,0.06)'; ctx.fillRect(0,0,1200,300); }
  }

  private renderGameOver() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillRect(0,0,1200,300);
    ctx.fillStyle = '#dc2626'; ctx.font = '28px monospace'; ctx.textAlign = 'center';
    ctx.fillText('GAME OVER — Hit an animal!', 600, 130);
    ctx.fillStyle = '#535353'; ctx.font = '16px monospace';
    ctx.fillText(`Score: ${Math.floor(this.score)}`, 600, 160);
    ctx.fillText('Press SPACE or click to restart', 600, 190);
    ctx.textAlign = 'left';
    this.drawBoy(ctx, 80, this.y+10, false, this.boyFrame);
  }
}
