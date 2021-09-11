import { mapTile } from '@/types/config.d';

export type daysWeather = 'clear' | 'rain' | 'snow';
export type weaponType = 'M-Gun' | 'Bazooka' | 'Cannon' | 'Vulcano';
export type unitType = 'Infantry' | 'Mechanic' | 'Recon' | 'Tank' | 'Anti-air';
export type tileType = 'Plain' | 'Wood' | 'Road' | 'Mountain' | 'HeadQuarter' | 'City' | 'Base';
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
  name: unitType;
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
  secondaryWeapon?: Weapon;
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
  capturingOwner: number;
  beCaptured(unit: Unit): void;
}

export interface InhibitorEntity extends BuildingEntity {
  readonly isActive: boolean;
  units: Array<Unit>;
  train(unit: string): void;
}
