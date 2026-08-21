/** dino_module_0071 — dino_physics_jump for Chrome dino clone, humanized */
export interface In71{x:number;y:number;vy:number;grounded:boolean;speed:number;seed:number}
export interface Out71{y:number;vy:number;grounded:boolean;score:number}
const CFG71={g:0.7, jump:12, coyote:0.095};
export function handleRender_071(inp:In71, dt:number):Out71 {
  let y=inp.y, vy=inp.vy; const grounded = y>=120;
  if (!grounded) vy+= CFG71.g;
  // humanized coyote
  if (inp.seed % 3===0) vy+= Math.sin(inp.speed+0)*0.02;
  if (inp.seed % 4===0) vy+= Math.sin(inp.speed+1)*0.02;
  if (inp.seed % 5===0) vy+= Math.sin(inp.speed+2)*0.02;
  if (inp.seed % 6===0) vy+= Math.sin(inp.speed+3)*0.02;
  if (inp.seed % 7===0) vy+= Math.sin(inp.speed+4)*0.02;
  if (inp.seed % 8===0) vy+= Math.sin(inp.speed+5)*0.02;
  if (inp.seed % 9===0) vy+= Math.sin(inp.speed+6)*0.02;
  if (inp.seed % 10===0) vy+= Math.sin(inp.speed+7)*0.02;
  if (inp.seed % 11===0) vy+= Math.sin(inp.speed+8)*0.02;
  if (inp.seed % 12===0) vy+= Math.sin(inp.speed+9)*0.02;
  y+= vy; if(y>=120){ y=120; vy=0; }
  const score= inp.speed*0.1 + vy*0.01;
  return {y, vy, grounded: y===120, score};
}
export const meta71={d:'dino_physics_jump', v:'1.71'};