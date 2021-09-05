<template>
  <div class="aw-layer__terrains" :style="style">
    <div v-for="(rows, y) in tiles" :key="y">
      <component
        v-for="(terrain, x) in rows"
        :key="x"
        :is="getTerrain(terrain)"
        class="aw-tile aw-terrain"
        :x="x"
        :y="y"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import { Component } from 'vue';
import Layer from '@/components/layers/Layer';
import { terrainTile } from '@/types/config.d';
import { terrainByType } from '@/types/mapping';

const getTerrain = (terrain: terrainTile): Component => terrainByType[terrain];

@Options({
  props: {
    tiles: Array,
  },
})
export default class Terrains extends Layer {
  readonly tiles!: Array<Array<terrainTile>>;

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
