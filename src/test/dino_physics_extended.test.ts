import { describe, it, expect } from 'vitest';
import { JumpBuffer } from '../renderer/core/JumpBuffer';
describe('dino physics',()=>{
  it('coyote allows late jump',()=>{
    const j=new JumpBuffer(); j.tryJump(0,true); expect(j.tryJump(0.05,false)).toBe(true);
  });
  it('ptero spawns', async()=>{
    const m=await import('../renderer/entities/Ptero'); const p=new m.Ptero(); p.update(6,0.016); expect(p.x).toBeLessThan(1200);
  });
});
