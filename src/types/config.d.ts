import { terrainName, buildingName } from '@/types/names.d';
import { tileType, unitType } from '@/types/entities.d';

export type mapTile = {
  type: tileType;
  owner?: number;
  unit?: {
    name: unitType;
    size: number;
    owner: number;
    fuel: number;
    primaryAmmo: number;
    secondaryAmmo: number;
  }
}
export type mapConfig = Array<Array<mapTile>>;

export type terrainTile = terrainName;
export type terrainConfig = Array<Array<terrainTile>>;

export type buildingTile = {type: buildingName; owner?: number };
export type buildingConfig = Array<Array<buildingTile | undefined>>;

export type unitTile = {
  name: unitType;
  size: number;
  owner: number;
  fuel: number;
  primaryAmmo: number;
  secondaryAmmo: number;
};
export type unitConfig = Array<Array< unitTile | undefined>>;
