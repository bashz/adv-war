export type weaponType = 'M-Gun' | 'Bazooka' | 'Cannon' | 'Vulcano';
export type unitType = 'Infantry' | 'Mechanic' | 'Recon' | 'Tank' | 'Anti-air';
export type unitFamily = 'Infantry' | 'Vehicle';
export type unitEnvironment = 'Land';
export type movementMean = 'Infantry' | 'Mechanic' | 'Tires' | 'Tread';
export type terrainName = 'Plain' | 'Wood' | 'Mountain' | 'Road';
export type buildingName = 'HeadQuarter' | 'City' | 'Base';

export interface Weapon {
  name: weaponType;
  ammo: number;
  maxAmmo: number;
  damage: {[type in unitFamily]: number};
}

export interface Unit {
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
  weapons: [Weapon, Weapon | undefined]
  x: number;
  y: number;
}
export interface UILayer {
  elevation: number;
  readonly style: {zIndex: number};
}

export interface UITile {
  readonly x: number;
  readonly y: number;
  bgX: number;
  bgY: number;
  readonly position: {top: string; left: string};
  readonly bg: {backgroundPosition: string}
}

export interface UITerrain extends UITile {
  defense: number;
  moveCost: {[mean in movementMean]: number};
}

export interface UIBuilding extends UITerrain {
  readonly originalOwner: number;
  repair: unitEnvironment;
  owner: number;
  leftToCapture: number;
  capturingOwner: number;
  readonly color: string;
  beCaptured(unit: Unit): void;
}

export interface InteractiveBuilding extends UIBuilding {
  readonly isActive: boolean;
  units: Array<Unit>;
  train(unit: string): void;
}
