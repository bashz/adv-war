import { Vue } from 'vue-class-component';
import { UISprite } from '@/types/ui.d';

export default class Sprite extends Vue implements UISprite {
  private defaultSprite = { x: 0, y: 0 };

  get sprite(): { x: number, y: number } {
    return this.defaultSprite;
  }

  set sprite(value: { x: number, y: number }) {
    this.defaultSprite = value;
  }

  get background(): {backgroundPosition: string} {
    return { backgroundPosition: `${-17 * this.sprite.x}px ${-17 * this.sprite.y}px` };
  }
}
