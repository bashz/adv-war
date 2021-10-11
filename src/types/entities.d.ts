import { mapTile } from '@/types/config.d';

export type daysWeather = 'clear' | 'rain' | 'snow';
export type weaponType = 'M-Gun' | 'Bazooka' | 'Cannon' | 'Vulcano';
export type unitFamily = 'Infantry' | 'Vehicle';
export type unitEnvironment = 'Land';
export type movementMean = 'Infantry' | 'Mechanic' | 'Tires' | 'Tread';

export interface WeaponEntity {
  name: weaponType;
  ammo: number;
  maxAmmo: number;
  damage: {[type in unitFamily]: number};
}

export interface UnitEntity {
  cost: number;
  owner: number;
  familly: unitFamily;
  environment: unitEnvironment;
  size: number;
  moves: number;
  movementType: movementMean;
  vision: number;
  fuel: number;
  maxFuel: number;
  primaryWeapon: Weapon;
  altWeapon?: Weapon;
  x: number;
  y: number;
}

export interface TerrainEntity {
  defense: number;
  moveCost: {[weather in daysWeather]: {[mean in movementMean]: number}};
}

export interface BuildingEntity extends TerrainEntity {
  readonly current: mapTile;
  repair: unitEnvironment;
  owner: number;
  leftToCapture: number;
  capturingBy: number;
  beCaptured(unit: Unit): void;
}

export interface InhibitorEntity extends BuildingEntity {
  readonly isActive: boolean;
  units: Array<Unit>;
  train(unit: string): void;
}
