<template>
  <div class="aw-building__base" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import Animated from '@/components/Animated';
import { unitType } from '@/types/config.d';

export default class Base extends mixins(Building, Animated) {
  units: Array<unitType> = ['Infantry', 'Mechanic', 'Recon', 'Tank', 'AntiAir'];

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
    return this.owner ? this.owner + (this.animationIndex * 6) : this.owner;
  }
}
</script>
