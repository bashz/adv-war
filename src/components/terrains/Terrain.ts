import { UITerrain } from '@/types/ui.d';
import Tile from '@/components/Tile';

export default class Terrain extends Tile implements UITerrain {
  defense = 0;

  moveCost = {
    Infantry: Infinity,
    Mechanic: Infinity,
    Tires: Infinity,
    Tread: Infinity,
  };
}
