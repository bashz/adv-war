import { Vue, Options } from 'vue-class-component';
import {
  UnitEntity, unitFamily, unitEnvironment, movementMean,
} from '@/types/entities.d';
import Weapon from '@/models/Weapon';

@Options({
  props: {
    owner: Number,
    power: { type: Number, default: 10 },
    fuel: Number,
    primaryAmmo: Number,
    altAmmo: Number,
  },
})
export default class Unit extends Vue implements UnitEntity {
  readonly owner!: number;

  readonly power!: number;

  readonly fuel!: number;

  readonly primaryAmmo!: number;

  readonly altAmmo!: number;

  cost = 1000;

  family: unitFamily = 'Infantry';

  environment: unitEnvironment = 'Land';

  squadSize = this.power;

  moves = 3;

  movementType: movementMean = 'Infantry';

  vision = 3;

  maxFuel = 99;

  get currentFuel(): number {
    return this.fuel || this.maxFuel;
  }

  primaryWeapon = new Weapon('MGun', Infinity, { Infantry: 4, Vehicle: 1 }, this.primaryAmmo);

  altWeapon!: Weapon;
}
