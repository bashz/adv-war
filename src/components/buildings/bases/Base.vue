<template>
  <div class="aw-building__base" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import Tile from '@/components/Tile';

export default class Base extends mixins(Building, Tile) {
  bgX = 6;

  bgY = 67;

  defense = 3;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
</script>
