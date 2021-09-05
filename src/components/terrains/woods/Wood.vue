<template>
  <div class="aw-terrain__wood" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import Tile from '@/components/Tile';

export default class Wood extends mixins(Terrain, Tile) {
  bgX = 1;

  defense = 2;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 3,
    Tread: 2,
  };
}
</script>
