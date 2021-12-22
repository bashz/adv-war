<template>
  <div class="aw-status__hp" :style="background"/>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import MultiSprite from '@/components/MultiSprite';

@Options({
  props: {
    hp: Number,
  },
})
export default class Hp extends MultiSprite {
  readonly hp!: number;

  sprites = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },
  ];

  size = { w: 8, h: 8 };

  get spriteIndex(): number {
    return this.hp - 1;
  }
}
</script>

<style lang="scss">
.aw-status__hp {
  position: absolute;
  top: 16px;
  left: 12px;
}
</style>
