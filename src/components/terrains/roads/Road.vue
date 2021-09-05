<template>
  <div class="aw-terrain__road" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import Tile from '@/components/Tile';

export default class Road extends mixins(Terrain, Tile) {
  bgX = 9;

  bgY = 3;

  defense = 0;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
</script>
