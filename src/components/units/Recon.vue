<template>
  <div class="aw-unit__recon" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';

export default class Recon extends mixins(Unit, Animated) {
  sprites = [
    { x: 0, y: 10 },
    { x: 1, y: 10 },
  ];

  sequence = [40, 40];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
