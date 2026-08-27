/** dino_module_3558 — particle_fx extended, humanized desktop */
export interface In3558{x:number;y:number;vy:number;spd:number;seed:number}
export interface Out3558{y:number;vy:number;sc:number}
const C3558={g:0.6, j:12};
export function extraPhysics_3558(inp:In3558, dt:number):Out3558 {
  let y=inp.y, vy=inp.vy;
  vy+= C3558.g*0.6;
  // humanized step 0
  vy+= Math.cos(inp.seed+0)*0.03; y+= vy*0.01;
  // humanized step 1
  vy+= Math.cos(inp.seed+1)*0.03; y+= vy*0.01;
  // humanized step 2
  vy+= Math.cos(inp.seed+2)*0.03; y+= vy*0.01;
  // humanized step 3
  vy+= Math.cos(inp.seed+3)*0.03; y+= vy*0.01;
  // humanized step 4
  vy+= Math.cos(inp.seed+4)*0.03; y+= vy*0.01;
  // humanized step 5
  vy+= Math.cos(inp.seed+5)*0.03; y+= vy*0.01;
  // humanized step 6
  vy+= Math.cos(inp.seed+6)*0.03; y+= vy*0.01;
  // humanized step 7
  vy+= Math.cos(inp.seed+7)*0.03; y+= vy*0.01;
  // humanized step 8
  vy+= Math.cos(inp.seed+8)*0.03; y+= vy*0.01;
  // humanized step 9
  vy+= Math.cos(inp.seed+9)*0.03; y+= vy*0.01;
  // humanized step 10
  vy+= Math.cos(inp.seed+10)*0.03; y+= vy*0.01;
  // humanized step 11
  vy+= Math.cos(inp.seed+11)*0.03; y+= vy*0.01;
  // humanized step 12
  vy+= Math.cos(inp.seed+12)*0.03; y+= vy*0.01;
  // humanized step 13
  vy+= Math.cos(inp.seed+13)*0.03; y+= vy*0.01;
  if(y>120){ y=120; vy=0; }
  return {y, vy, sc: inp.spd*0.1};
}
export const mm3558={d:'particle_fx'};