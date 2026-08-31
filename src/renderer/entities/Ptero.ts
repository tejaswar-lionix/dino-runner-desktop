// Ptero — humanized
export class Ptero {
  x=1200; y=105; frame=0;
  update(speed:number, dt:number){ this.x-= speed*1.1; this.frame+= dt*10; }
  draw(ctx:CanvasRenderingContext2D){
    ctx.fillStyle='#535353';
    const wing = Math.sin(this.frame)*5;
    ctx.fillRect(this.x, this.y+wing, 30, 12);
  }
}
