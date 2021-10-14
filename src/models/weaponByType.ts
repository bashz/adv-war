import { weaponType, WeaponEntity } from '@/types/entities.d';
import Weapon from '@/models/Weapon';

const terrainByType: {[Type in weaponType]: () => WeaponEntity} = {
  'M-Gun': () => new Weapon('M-Gun', 99, { Infantry: 4, Vehicle: 1 }),
  Bazooka: () => new Weapon('Bazooka', 4, { Infantry: 2, Vehicle: 4 }),
  Cannon: () => new Weapon('Cannon', 9, { Infantry: 2, Vehicle: 5 }),
  Vulcano: () => new Weapon('Vulcano', 9, { Infantry: 5, Vehicle: 3 }),
};

export default terrainByType;
