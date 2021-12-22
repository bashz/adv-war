import { Vue } from 'vue-class-component';
import { UISprite } from '@/types/ui.d';

export default class Sprite extends Vue implements UISprite {
  protected defaultSprite = { x: 0, y: 0 };

  size = { w: 18, h: 18 };

  get sprite(): { x: number, y: number } {
    return this.defaultSprite;
  }

  set sprite(value: { x: number, y: number }) {
    this.defaultSprite = value;
  }

  get background(): {backgroundPosition: string} {
    return { backgroundPosition: `${-(this.size.w + 1) * this.sprite.x}px ${-(this.size.h + 1) * this.sprite.y}px` };
  }
}
