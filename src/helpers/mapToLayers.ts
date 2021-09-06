import {
  buildingConfig, mapConfig, mapTile, terrainConfig, terrainTile, unitConfig,
} from '@/types/config.d';

function checkFull(current: terrainTile, top: mapTile) : terrainTile {
  let terrain = current;
  if (top?.type === 'Mountain' || top?.type === 'Plain') {
    terrain = `${terrain}Full` as terrainTile;
  }
  return terrain;
}

function checkShadow(current: terrainTile, left: mapTile): terrainTile {
  let terrain = current;
  if (left?.type === 'Mountain') {
    terrain = `${terrain}Shadow` as terrainTile;
  }
  return terrain;
}

function checkSummit(current: terrainTile, bottom: mapTile) : terrainTile {
  let terrain = current;
  if (bottom?.type === 'Mountain') {
    terrain = `${terrain}Summit` as terrainTile;
  }
  return terrain;
}

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
      if (tile.type === 'Mountain') {
        terrains[y][x] = 'Mountain';
        terrains[y][x] = checkFull(terrains[y][x], map[y - 1] && map[y - 1][x]);
        terrains[y][x] = checkSummit(terrains[y][x], map[y + 1] && map[y + 1][x]);
      } else if (tile.type === 'Road' || tile.type === 'Wood') {
        terrains[y][x] = tile.type;
      } else {
        terrains[y][x] = 'Plain';
        terrains[y][x] = checkShadow(terrains[y][x], map[y][x - 1]);
        terrains[y][x] = checkSummit(terrains[y][x], map[y + 1] && map[y + 1][x]);
      }
    });
  });

  return {
    terrains,
    buildings,
    units,
  };
}
