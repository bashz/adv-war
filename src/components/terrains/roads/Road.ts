import Terrain from '@/components/terrains/Terrain';

export default class Road extends Terrain {
  defense = 0;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
