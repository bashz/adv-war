import Building from '@/components/buildings/Building';

export default class HeadQuarter extends Building {
  defense = 4;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
