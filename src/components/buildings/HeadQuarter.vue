<template>
  <div class="aw-building__head-quarter" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import Animated from '@/components/Animated';

export default class HeadQuarter extends mixins(Building, Animated) {
  sprites = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
    { x: 10, y: 0 },
    { x: 10, y: 1 },
    { x: 10, y: 2 },
    { x: 10, y: 3 },
    { x: 10, y: 4 },
    { x: 10, y: 5 },
  ];

  sequence = [40, 80];

  size = { w: 16, h: 32 };

  moveCost = {
    clear: {
      Infantry: 1,
      Mechanic: 1,
      Tires: 1,
      Tread: 1,
    },
    rain: {
      Infantry: Infinity,
      Mechanic: Infinity,
      Tires: Infinity,
      Tread: Infinity,
    },
    snow: {
      Infantry: Infinity,
      Mechanic: Infinity,
      Tires: Infinity,
      Tread: Infinity,
    },
  };

  get spriteIndex(): number {
    return this.owner ? this.owner + (this.animationIndex * 6) : this.owner;
  }
}
</script>
