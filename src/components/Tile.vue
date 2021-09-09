<template>
  <div class="aw-tile" :style="position" >
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { UITile } from '@/types/ui.d';

@Options({
  props: {
    x: Number,
    y: Number,
  },
})
export default class Tile extends Vue implements UITile {
  readonly x!: number;

  readonly y!: number;

  get position(): {top: string; left: string} {
    return { top: `${this.y * 16}px`, left: `${this.x * 16}px` };
  }
}
</script>

<style lang="scss">
.aw-tile {
  position: absolute;
  display: block;
}
</style>
