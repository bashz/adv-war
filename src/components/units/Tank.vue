<template>
  <div class="aw-unit__tank" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';

export default class Tank extends mixins(Unit, Animated) {
  sprites = [
    { x: 0, y: 11 },
    { x: 1, y: 11 },
    { x: 2, y: 11 },
    { x: 1, y: 11 },
  ];

  sequence = [20, 20, 20, 20];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
