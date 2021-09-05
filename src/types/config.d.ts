import { terrainName, buildingName } from '@/types/ui.d';

export type terrainTile = terrainName;
export type buildingTile = {type: buildingName; owner: number};
