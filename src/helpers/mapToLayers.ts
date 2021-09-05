import {
  buildingConfig, mapConfig, terrainConfig, unitConfig,
} from '@/types/config.d';

export default function mapToLayers(map: mapConfig): {
  terrains: terrainConfig;
  buildings: buildingConfig;
  units: unitConfig
} {
  const terrains: terrainConfig = [];
  const buildings: buildingConfig = [];
  const units: unitConfig = [];

  map.forEach((row, y) => {
    terrains[y] = [];
    row.forEach((tile, x) => {
      if (tile.type === 'Road' || tile.type === 'Mountain' || tile.type === 'Wood') {
        terrains[y][x] = tile.type;
      } else {
        terrains[y][x] = 'Plain';
        if (x && map[y][x - 1].type === 'Mountain') {
          terrains[y][x] = 'PlainShadow';
        }
      }
    });
  });

  return {
    terrains,
    buildings,
    units,
  };
}
