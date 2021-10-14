import { WeaponEntity, weaponType, damageType } from '@/types/entities.d';

export default class Weapon implements WeaponEntity {
  name!: weaponType;

  maxAmmo;

  ammo!: number;

  damage;

  constructor(name: weaponType, maxAmmo: number, damage: damageType) {
    this.name = name;
    this.maxAmmo = maxAmmo;
    this.damage = damage;
    this.refill();
  }

  private refill(): void {
    this.ammo = this.maxAmmo;
  }

  private hasFired(): void {
    this.ammo -= 1;
  }

  private canFire(): boolean {
    return !!this.ammo;
  }
}
