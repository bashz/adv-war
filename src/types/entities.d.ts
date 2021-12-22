import { mapTile, unitType } from '@/types/config.d';

export type daysWeather = 'clear' | 'rain' | 'snow';
export type weaponType = 'MGun' | 'Bazooka' | 'Cannon' | 'Vulcan';
export type unitFamily = 'Infantry' | 'Vehicle';
export type unitEnvironment = 'Land';
export type movementMean = 'Infantry' | 'Mechanic' | 'Tires' | 'Tread';

export type damageType = {[type in unitFamily]: number};

export interface WeaponEntity {
  name: weaponType;
  ammo: number;
  maxAmmo: number;
  damage: damageType;
  refill(): void;
  fire(): void;
  canFire(): boolean;
}

export interface UnitEntity {
  readonly owner: number;
  readonly power: number;
  readonly fuel: number;
  readonly primaryAmmo: number;
  readonly altAmmo?: number;
  readonly hp: number;
  readonly lowFuel: boolean;
  readonly lowAmmo: boolean;
  cost: number;
  owner: number;
  family: unitFamily;
  environment: unitEnvironment;
  squadSize: number;
  moves: number;
  movementType: movementMean;
  vision: number;
  fuel: number;
  primaryWeapon: WeaponEntity;
  altWeapon?: WeaponEntity;
}

export interface TerrainEntity {
  defense: number;
  moveCost: {[weather in daysWeather]: {[mean in movementMean]: number}};
}

export interface BuildingEntity extends TerrainEntity {
  readonly isActive: boolean;
  readonly current: mapTile;
  readonly x: number;
  readonly y: number;
  units: Array<unitType>;
  repair: unitEnvironment;
  owner: number;
  leftToCapture: number;
  capturingBy: number;
  beCaptured(unit: UnitEntity): void;
  train(unit: unitType): void;
}
