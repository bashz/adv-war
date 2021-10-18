<template>
  <div class="aw-layer__buildings" :style="zIndex">
    <div v-for="(rows, y) in map" :key="y">
      <tile v-for="(building, x) in rows" :key="x" :x="x" :y="y">
        <component
          :is="getBuilding(building)"
          :current="building"
          :top="map[y - 1] && map[y - 1][x]"
          :bottom="map[y - 1] && map[y - 1][x]"
          :left="map[y][x - 1]"
          :right="map[y][x + 1]"
          :style="background"
          :frame="frame"
          class="aw-building"
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
import { mapTile, mapConfig } from '@/types/config.d';
import buildingByType from '@/models/buildingByType';

const getBuilding = (tile: mapTile): Component | undefined => {
  if (tile.type === 'City' || tile.type === 'Base' || tile.type === 'HeadQuarter') {
    return buildingByType[tile.type];
  }
  return undefined;
};

@Options({
  components: {
    Tile,
  },
  props: {
    map: Array,
    frame: Number,
  },
})
export default class Buildings extends Layer {
  readonly map!: mapConfig;

  elevation = 2;

  spriteFile = '/img/estate.png';

  getBuilding = getBuilding;
}
</script>

<style lang="scss">
.aw-building {
  width: 16px;
  height: 32px;
  translate: 0 -16px;
}
</style>
