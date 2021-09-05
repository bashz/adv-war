import { Options } from 'vue-class-component';
import { UIBuilding, unitEnvironment, Unit } from '@/types/ui.d';
import playerColors from '@/types/traits';
import Terrain from '@/components/terrains/Terrain';

@Options({
  props: {
    originalOwner: Number,
  },
})
export default class Building extends Terrain implements UIBuilding {
  readonly originalOwner!: number;

  repair: unitEnvironment = 'Land';

  owner = this.originalOwner;

  leftToCapture = 20;

  capturingOwner = this.originalOwner;

  beCaptured(unit: Unit): void {
    if (this.capturingOwner === unit.owner) {
      this.leftToCapture -= unit.size;
      if (this.leftToCapture <= 0) {
        this.owner = unit.owner;
        this.leftToCapture = 20;
      }
    } else {
      this.capturingOwner = unit.owner;
      this.leftToCapture = 20;
      this.beCaptured(unit);
    }
  }

  get color(): string {
    return playerColors[this.owner];
  }
}
