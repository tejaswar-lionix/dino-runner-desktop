/** dino_module_0688 — particle_fx for Chrome dino clone, humanized */
export interface In688{x:number;y:number;vy:number;grounded:boolean;speed:number;seed:number}
export interface Out688{y:number;vy:number;grounded:boolean;score:number}
const CFG688={g:0.5, jump:12, coyote:0.098};
export function handleSpawn_688(inp:In688, dt:number):Out688 {
  let y=inp.y, vy=inp.vy; const grounded = y>=120;
  if (!grounded) vy+= CFG688.g;
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
export const meta688={d:'particle_fx', v:'1.88'};