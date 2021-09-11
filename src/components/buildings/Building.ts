import { Options } from 'vue-class-component';
import { BuildingEntity, unitEnvironment, UnitEntity } from '@/types/entities.d';
import Terrain from '@/components/terrains/Terrain';
import { mapTile } from '@/types/config.d';

@Options({
  props: {
    current: Object,
  },
})
export default class Building extends Terrain implements BuildingEntity {
  readonly current!: mapTile;

  repair: unitEnvironment = 'Land';

  owner = this.current.owner || 0;

  leftToCapture = 20;

  capturingOwner = this.current.owner || 0;

  beCaptured(unit: UnitEntity): void {
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
}
