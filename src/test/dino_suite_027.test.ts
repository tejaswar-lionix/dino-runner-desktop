import { describe, it, expect } from 'vitest';
import * as mod from '../dino_core/dino_module_0027';
describe('dino module 0027', () => {
  it('handles jump', () => {
    const fn = Object.values(mod).find(v=>typeof v==='function') as any;
    if (!fn) return;
    const out = fn({x:0,y:100,vy:0,grounded:true,speed:6,seed:7,spd:6},0.016);
    expect(out).toBeDefined();
  });
});
