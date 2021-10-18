<template>
  <div class="aw-unit__anti-air" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';

export default class AntiAir extends mixins(Unit, Animated) {
  sprites = [
    { x: 0, y: 12 },
    { x: 1, y: 12 },
  ];

  sequence = [40, 40];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
