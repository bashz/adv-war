<template>
  <div class="aw-layer__buildings" :style="style">
    <div v-for="(rows, y) in tiles" :key="y">
      <tile v-for="(building, x) in rows" :key="x" :x="x" :y="y">
        <component
          :is="getBuilding(building)"
          :top="tiles[y - 1] && tiles[y - 1][x]"
          :bottom="tiles[y - 1] && tiles[y - 1][x]"
          :left="tiles[y][x - 1]"
          :right="tiles[y][x + 1]"
          :original-owner="building?.owner || 0"
          class="aw-sprite aw-building"
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
import { buildingTile } from '@/types/config.d';
import { buildingByType } from '@/types/mapping';

const getBuilding = (building: buildingTile | undefined):
  Component | undefined => (building?.type && buildingByType[building.type]) || undefined;

@Options({
  components: {
    Tile,
  },
  props: {
    tiles: Array,
  },
})
export default class Buildings extends Layer {
  readonly tiles!: Array<Array<buildingTile>>;

  elevation = 2;

  getBuilding = getBuilding;
}
</script>

<style lang="scss">
.aw-building {
  width: 16px;
  height: 32px;
  transform: translateY(-16px);
}
</style>
