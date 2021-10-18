import { mapTile, unitType } from '@/types/config.d';

export type daysWeather = 'clear' | 'rain' | 'snow';
export type weaponType = 'MGun' | 'Bazooka' | 'Cannon' | 'Vulcano';
export type unitFamily = 'Infantry' | 'Vehicle';
export type unitEnvironment = 'Land';
export type movementMean = 'Infantry' | 'Mechanic' | 'Tires' | 'Tread';

export type damageType = {[type in unitFamily]: number};

export interface WeaponEntity {
  name: weaponType;
  ammo: number;
  maxAmmo: number;
  damage: damageType;
}

export interface UnitEntity {
  cost: number;
  owner: number;
  family: unitFamily;
  environment: unitEnvironment;
  power: number;
  moves: number;
  movementType: movementMean;
  vision: number;
  fuel: number;
  maxFuel: number;
  primaryWeapon: WeaponEntity;
  altWeapon?: WeaponEntity;
  x: number;
  y: number;
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
  units: Array<UnitEntity>;
  repair: unitEnvironment;
  owner: number;
  leftToCapture: number;
  capturingBy: number;
  beCaptured(unit: UnitEntity): void;
  train(unit: unitType): void;
}
