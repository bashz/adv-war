<template>
  <div class="aw-terrain__road" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Road from '@/components/terrains/roads/Road';
import Tile from '@/components/Tile';

export default class RoadD extends mixins(Road, Tile) {
  bgX = 9;

  bgY = 3;
}
</script>
