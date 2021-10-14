<template>
  <div class="aw-unit__infantry" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';

export default class Infantry extends mixins(Unit, Animated) {
  sprites = [
    { x: 6, y: 0 },
    { x: 6, y: 1 },
    { x: 6, y: 2 },
    { x: 6, y: 3 },
    { x: 6, y: 4 },
    { x: 6, y: 5 },
    { x: 16, y: 0 },
    { x: 16, y: 1 },
    { x: 16, y: 2 },
    { x: 16, y: 3 },
    { x: 16, y: 4 },
    { x: 16, y: 5 },
  ];

  sequence = [40, 80];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.owner ? this.owner + (this.animationIndex * 6) : this.owner;
  }
}
</script>
