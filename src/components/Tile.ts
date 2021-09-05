import { Vue, Options } from 'vue-class-component';
import { UITile } from '@/types/ui.d';

@Options({
  props: {
    x: Number,
    y: Number,
  },
})
export default class Tile extends Vue implements UITile {
  readonly x!: number;

  readonly y!: number;

  bgX = 0;

  bgY = 0;

  get position(): {top: string; left: string} {
    return { top: `${this.y * 16}px`, left: `${this.x * 16}px` };
  }

  get bg(): {backgroundPosition: string} {
    return { backgroundPosition: `${-3 - 17 * this.bgX}px ${-1 - 17 * this.bgY}px` };
  }
}
