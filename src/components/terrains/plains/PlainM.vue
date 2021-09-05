<template>
  <div class="aw-terrain__plain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Plain from '@/components/terrains/plains/Plain';
import Tile from '@/components/Tile';

export default class PlainM extends mixins(Plain, Tile) {
  bgX = 4;

  bgY = 1;
}
</script>
