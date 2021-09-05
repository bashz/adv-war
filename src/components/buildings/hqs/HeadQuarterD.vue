<template>
  <div class="aw-building__head-quarter" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import HeadQuarter from '@/components/buildings/hqs/HeadQuarter';
import Tile from '@/components/Tile';

export default class HeadQuarterD extends mixins(Tile, HeadQuarter) {
  bgY = 67;
}
</script>
