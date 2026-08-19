/**
 * Dino Runner — Chrome offline clone, desktop Electron
 * 60fps, canvas 1200x300 (original) or 1280x720, humanized physics
 */
export class DinoGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private score = 0;
  private speed = 6;
  private grounded = true;
  private vy = 0;
  private y = 120;
  private obstacles: {x:number; type:number}[] = [];
  private frame = 0;
  constructor(containerId: string) {
    const c = document.getElementById(containerId) || document.body;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1200; this.canvas.height = 300;
    c.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')!;
    window.addEventListener('keydown', e => { if (e.code==='Space' && this.grounded) { this.vy = -12; this.grounded=false; }});
  }
  start() { requestAnimationFrame(this.loop.bind(this)); setInterval(()=>{ this.obstacles.push({x:1200, type: Math.random()>0.85?1:0});}, 1200); }
  private loop() {
    this.frame++;
    // physics — humanized gravity
    this.vy += 0.6; this.y += this.vy;
    if (this.y >= 120) { this.y=120; this.vy=0; this.grounded=true; }
    this.score += this.speed*0.1; if(this.frame%500===0) this.speed+=0.3;
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }
  private render() {
    const ctx=this.ctx; ctx.fillStyle='#fff'; ctx.fillRect(0,0,1200,300);
    ctx.fillStyle='#535353'; ctx.fillRect(0,180,1200,2); // ground
    // dino
    ctx.fillStyle='#535353'; ctx.fillRect(80, this.y, 44, 47);
    // obstacles
    this.obstacles.forEach(o=>{ o.x-=this.speed; ctx.fillRect(o.x, o.type===0?135:110, 20, o.type===0?40:25);});
    this.obstacles=this.obstacles.filter(o=>o.x>-30);
    ctx.fillStyle='#535353'; ctx.font='12px monospace'; ctx.fillText(`Score ${Math.floor(this.score)}  Speed ${this.speed.toFixed(1)}`, 1000,20);
    // day/night
    if(Math.floor(this.score/500)%2===1){ ctx.fillStyle='rgba(0,0,0,0.04)'; ctx.fillRect(0,0,1200,300); }
  }
}
