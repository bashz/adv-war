import { Options } from 'vue-class-component';
import { BuildingEntity, unitEnvironment, UnitEntity } from '@/types/entities.d';
import Terrain from '@/components/terrains/Terrain';
import { mapTile, unitType } from '@/types/config.d';
import store from '@/store';

@Options({
  props: {
    current: Object,
    isActive: Boolean,
    x: Number,
    y: Number,
  },
})
export default class Building extends Terrain implements BuildingEntity {
  readonly current!: mapTile;

  readonly isActive!: boolean;

  readonly x!: number;

  readonly y!: number;

  units: Array<UnitEntity> = [];

  repair: unitEnvironment = 'Land';

  owner = this.current.owner || 0;

  leftToCapture = 20;

  capturingBy = this.current.owner || 0;

  beCaptured(unit: UnitEntity): void {
    if (this.capturingBy === unit.owner) {
      this.leftToCapture -= unit.power;
      if (this.leftToCapture <= 0) {
        this.owner = unit.owner;
        this.leftToCapture = 20;
      }
    } else {
      this.capturingBy = unit.owner;
      this.leftToCapture = 20;
      this.beCaptured(unit);
    }
  }

  train(unit: unitType): void {
    store.dispatch('spawn', {
      type: unit, owner: this.owner, x: this.x, y: this.y,
    });
  }
}
