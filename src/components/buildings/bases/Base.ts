import Building from '@/components/buildings/Building';

export default class Base extends Building {
  defense = 3;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
