<template>
  <div class="aw-terrain__mountain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import Tile from '@/components/Tile';

export default class Mountain extends mixins(Terrain, Tile) {
  bgX = 4;

  defense = 4;

  moveCost = {
    Infantry: 2,
    Mechanic: 1,
    Tires: Infinity,
    Tread: Infinity,
  };
}
</script>
