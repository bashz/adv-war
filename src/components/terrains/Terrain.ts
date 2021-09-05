import { Vue } from 'vue-class-component';
import { TerrainEntity } from '@/types/entities.d';

export default class Terrain extends Vue implements TerrainEntity {
  defense = 0;

  moveCost = {
    Infantry: Infinity,
    Mechanic: Infinity,
    Tires: Infinity,
    Tread: Infinity,
  };
}
