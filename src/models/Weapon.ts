import { WeaponEntity, weaponType, damageType } from '@/types/entities.d';

export default class Weapon implements WeaponEntity {
  name!: weaponType;

  maxAmmo;

  ammo!: number;

  damage;

  constructor(name: weaponType, maxAmmo: number, damage: damageType, ammo?: number) {
    this.name = name;
    this.maxAmmo = maxAmmo;
    this.damage = damage;
    if (ammo === undefined) this.refill();
    else this.ammo = ammo;
  }

  refill(): void {
    this.ammo = this.maxAmmo;
  }

  hasFired(): void {
    this.ammo -= 1;
  }

  canFire(): boolean {
    return !!this.ammo;
  }
}
