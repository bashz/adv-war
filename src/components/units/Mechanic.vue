<template>
  <div class="aw-unit__mechanic" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';

export default class Mechanic extends mixins(Unit, Animated) {
  sprites = [
    { x: 0, y: 5 },
    { x: 1, y: 5 },
  ];

  sequence = [20, 20];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
