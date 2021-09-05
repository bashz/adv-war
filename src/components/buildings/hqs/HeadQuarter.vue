<template>
  <div class="aw-building__head-quarter" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import Tile from '@/components/Tile';

export default class HeadQuarter extends mixins(Building, Tile) {
  bgY = 67;

  defense = 4;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
</script>
