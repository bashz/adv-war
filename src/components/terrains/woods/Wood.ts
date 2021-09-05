import Terrain from '@/components/terrains/Terrain';

export default class Wood extends Terrain {
  defense = 2;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 3,
    Tread: 2,
  };
}
