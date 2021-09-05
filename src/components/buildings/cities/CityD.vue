<template>
  <div class="aw-building__city" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import City from '@/components/buildings/cities/City';
import Tile from '@/components/Tile';

export default class cityD extends mixins(Tile, City) {
  bgX = 5;

  bgY = 57;
}
</script>
