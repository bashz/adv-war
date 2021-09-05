<template>
  <div class="aw-terrain__plain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import Tile from '@/components/Tile';

export default class Plain extends mixins(Terrain, Tile) {
  defense = 1;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 2,
    Tread: 1,
  };
}
</script>
