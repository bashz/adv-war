import Terrain from '@/components/terrains/Terrain';

export default class Plain extends Terrain {
  defense = 1;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 2,
    Tread: 1,
  };
}
