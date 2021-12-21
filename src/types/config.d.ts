export type unitType = 'Infantry' | 'Mechanic' | 'Recon' | 'Tank' | 'AntiAir';
export type terrainType = 'Plain' | 'Wood' | 'Road' | 'Mountain';
export type buildingType = 'HeadQuarter' | 'City' | 'Base';
export type tileType = terrainType | buildingType;

export type mapTile = {
  type: tileType;
  owner?: number;
  leftToCapture?: number;
  capturingBy?: number;
}

export type unitTile = {
  type: unitType;
  owner: number;
  x: number;
  y: number;
  power?: number;
  fuel?: number;
  primaryAmmo?: number;
  altAmmo?: number;
}

export type mapConfig = Array<Array<mapTile>>;

export type unitConfig = Array<unitTile>;

export type gameConfig = {
  map: mapConfig;
  units: unitConfig;
}
