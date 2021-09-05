<template>
  <div class="aw-layer__buildings" :style="style">
    <div v-for="(rows, y) in tiles" :key="y">
      <component
        v-for="(building, x) in rows"
        :key="x"
        :is="getBuilding(building)"
        :original-owner="building?.owner || 0"
        class="aw-tile aw-building"
        :x="x"
        :y="y"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import { Component } from 'vue';
import Layer from '@/components/layers/Layer';
import { buildingTile } from '@/types/config.d';
import { buildingByType } from '@/types/mapping';

const getBuilding = (building: buildingTile | undefined):
  Component | undefined => (building?.type && buildingByType[building.type]) || undefined;

@Options({
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
