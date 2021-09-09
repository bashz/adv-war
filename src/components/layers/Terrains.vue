<template>
  <div class="aw-layer__terrains" :style="style">
    <div v-for="(rows, y) in tiles" :key="y">
      <tile v-for="(terrain, x) in rows" :key="x" :x="x" :y="y">
        <component
          :is="getTerrain(terrain)"
          :top="tiles[y - 1] && tiles[y - 1][x]"
          :bottom="tiles[y + 1] && tiles[y + 1][x]"
          :left="tiles[y][x - 1]"
          :right="tiles[y][x + 1]"
          class="aw-sprite aw-terrain"
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
import { terrainTile } from '@/types/config.d';
import { terrainByType } from '@/types/mapping';

const getTerrain = (terrain: terrainTile): Component => terrainByType[terrain];

@Options({
  components: {
    Tile,
  },
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
