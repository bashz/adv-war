import { Vue } from 'vue-class-component';
import {
  UnitEntity, unitFamily, unitEnvironment, movementMean, WeaponEntity,
} from '@/types/entities.d';

export default class Unit extends Vue implements UnitEntity {
  cost = 1000;

  owner = 1;

  family: unitFamily = 'Infantry';

  environment: unitEnvironment = 'Land';

  power = 10;

  moves = 3;

  movementType: movementMean = 'Infantry';

  vision = 3;

  fuel = 99;

  maxFuel = 99;

  primaryWeapon: WeaponEntity = {
    name: 'M-Gun',
    ammo: 99,
    maxAmmo: 99,
    damage: {
      Infantry: 4,
      Vehicle: 1,
    },
  };

  x = 0;

  y = 0;
}
