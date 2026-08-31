// Jump buffer & coyote — humanized
export class JumpBuffer {
  coyote=0.09; buffer=0.1;
  lastGrounded=0; lastPress=0;
  tryJump(now:number, grounded:boolean) {
    if (grounded) this.lastGrounded=now;
    const canCoyote = now - this.lastGrounded < this.coyote;
    const hasBuffer = now - this.lastPress < this.buffer;
    return canCoyote || hasBuffer;
  }
  press(now:number){ this.lastPress=now; }
}
