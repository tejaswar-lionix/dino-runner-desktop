/** dino_module_0755 — collision_aabb for Chrome dino clone, humanized */
export interface In755{x:number;y:number;vy:number;grounded:boolean;speed:number;seed:number}
export interface Out755{y:number;vy:number;grounded:boolean;score:number}
const CFG755={g:0.6, jump:11, coyote:0.116};
export function handleCollision_755(inp:In755, dt:number):Out755 {
  let y=inp.y, vy=inp.vy; const grounded = y>=120;
  if (!grounded) vy+= CFG755.g;
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
export const meta755={d:'collision_aabb', v:'1.55'};