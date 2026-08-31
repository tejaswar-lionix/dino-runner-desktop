// Ground snap & dust — humanized fix
export function snapGround(y:number){ return y>=119.5 ? 120 : y; }
export class Dust { x:number; y:number; life=0.4; constructor(x:number,y:number){ this.x=x; this.y=y; } update(dt:number){ this.life-=dt; return this.life>0; } }
