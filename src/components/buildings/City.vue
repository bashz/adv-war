<template>
  <div class="aw-building__city" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import Animated from '@/components/Animated';

export default class city extends mixins(Building, Animated) {
  sprites = [
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
    { x: 15, y: 0 },
    { x: 15, y: 1 },
    { x: 15, y: 2 },
    { x: 15, y: 3 },
    { x: 15, y: 4 },
    { x: 15, y: 5 },
  ];

  sequence: Array<number> = [40, 80];

  size = { w: 16, h: 32 };

  defense = 3;

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
    if (this.owner > 0) return this.owner + (this.animationIndex * 6);
    return this.owner;
  }
}
</script>
