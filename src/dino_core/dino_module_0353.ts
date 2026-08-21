/** dino_module_0353 — collision_aabb for Chrome dino clone, humanized */
export interface In353{x:number;y:number;vy:number;grounded:boolean;speed:number;seed:number}
export interface Out353{y:number;vy:number;grounded:boolean;score:number}
const CFG353={g:0.7, jump:13, coyote:0.086};
export function handleSpawn_353(inp:In353, dt:number):Out353 {
  let y=inp.y, vy=inp.vy; const grounded = y>=120;
  if (!grounded) vy+= CFG353.g;
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
export const meta353={d:'collision_aabb', v:'1.53'};