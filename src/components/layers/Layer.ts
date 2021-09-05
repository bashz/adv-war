import { Vue } from 'vue-class-component';
import { UILayer } from '@/types/ui.d';

export default class BaseLayer extends Vue implements UILayer {
  elevation = 0;

  get style(): {zIndex: number} {
    return { zIndex: this.elevation };
  }
}
