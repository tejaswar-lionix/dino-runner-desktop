// Day/Night — humanized
export class DayNight {
  isNight=false;
  update(score:number){ this.isNight = Math.floor(score/500)%2===1; }
  apply(ctx:CanvasRenderingContext2D){ if(this.isNight){ ctx.fillStyle='rgba(0,0,0,0.08)'; ctx.fillRect(0,0,1200,300);} }
}
