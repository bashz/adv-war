import { Vue } from 'vue-class-component';
import { UILayer } from '@/types/ui.d';

export default class BaseLayer extends Vue implements UILayer {
  elevation = 0;

  spriteFile = '/img/world.png';

  get zIndex(): {zIndex: number} {
    return { zIndex: this.elevation };
  }

  get background(): {backgroundImage: string} {
    return { backgroundImage: `url(${this.spriteFile})` };
  }
}
