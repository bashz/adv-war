import Terrain from '@/components/terrains/Terrain';

export default class Mountain extends Terrain {
  defense = 4;

  moveCost = {
    Infantry: 2,
    Mechanic: 1,
    Tires: Infinity,
    Tread: Infinity,
  };
}
