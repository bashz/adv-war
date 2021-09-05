<template>
  <div class="aw-terrain__mountain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Mountain from '@/components/terrains/mountains/Mountain';
import Tile from '@/components/Tile';

export default class MountainD extends mixins(Mountain, Tile) {
  bgX = 4;
}
</script>
