<template>
  <div class="aw-terrain__wood" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Wood from '@/components/terrains/woods/Wood';
import Tile from '@/components/Tile';

export default class WoodD extends mixins(Wood, Tile) {
  bgX = 1;
}
</script>
