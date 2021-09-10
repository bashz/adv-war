import { Options } from 'vue-class-component';
import { UIMultiSprite } from '@/types/ui.d';
import Sprite from '@/components/Sprite';
import { mapTile } from '@/types/config.d';

@Options({
  props: {
    current: Object,
    top: Object,
    bottom: Object,
    left: Object,
    right: Object,
  },
})
export default class MultiSprite extends Sprite implements UIMultiSprite {
  readonly current!: mapTile;

  readonly top!: mapTile;

  readonly bottom!: mapTile;

  readonly left!: mapTile;

  readonly right!: mapTile;

  sprites: Array<{x: number; y: number}> = [{ x: 0, y: 0 }];

  spriteIndex = 0;

  get sprite(): { x: number, y: number } {
    return this.sprites[this.spriteIndex];
  }
}
