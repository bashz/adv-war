<template>
  <div class="aw-layer__terrains" :style="zIndex">
    <div v-for="(rows, y) in map" :key="y">
      <tile v-for="(terrain, x) in rows" :key="x" :x="x" :y="y">
        <component
          :is="getTerrain(terrain)"
          :current="terrain"
          :top="map[y - 1] && map[y - 1][x]"
          :bottom="map[y + 1] && map[y + 1][x]"
          :left="map[y][x - 1]"
          :right="map[y][x + 1]"
          :style="background"
          class="aw-terrain"
        />
      </tile>
    </div>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import { Component } from 'vue';
import Layer from '@/components/layers/Layer';
import Tile from '@/components/Tile.vue';
import { mapTile, mapConfig, terrainType } from '@/types/config.d';
import terrainByType from '@/models/terrainByType';

const getTerrain = (tile: mapTile): Component => {
  let terrain: terrainType = 'Plain';
  if (tile.type === 'Road' || tile.type === 'Wood' || tile.type === 'Mountain') {
    terrain = tile.type;
  }
  return terrainByType[terrain];
};

@Options({
  components: {
    Tile,
  },
  props: {
    map: Array,
  },
})
export default class Terrains extends Layer {
  readonly map!: mapConfig;

  elevation = 1;

  getTerrain = getTerrain;
}
</script>

<style lang="scss">
.aw-terrain {
  width: 16px;
  height: 16px;
}
</style>
