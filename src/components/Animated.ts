import { UIAnimation } from '@/types/ui.d';
import MultiSprite from '@/components/MultiSprite';

export default class Animated extends MultiSprite implements UIAnimation {
  sequence: Array<number> = [];

  frame = -1;

  animationIndex = 0;

  animate(): void {
    let remaining = this.frame % this.sequence.reduce((total, duration) => total + duration, 0);
    for (let i = 0; i < this.sequence.length; i += 1) {
      remaining -= this.sequence[i];
      if (remaining < 0) {
        this.animationIndex = i;
        break;
      }
    }
  }
}
