<template>
  <div class="aw-terrain__road" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import MultiSprite from '@/components/MultiSprite';

export default class Road extends mixins(Terrain, MultiSprite) {
  sprites = [
    { x: 9, y: 3 },
    { x: 13, y: 3 },
    { x: 10, y: 3 },
    { x: 14, y: 3 },
    { x: 10, y: 3 },
    { x: 14, y: 3 },
    { x: 10, y: 3 },
    { x: 14, y: 3 },
    { x: 9, y: 3 },
    { x: 13, y: 3 },
    { x: 9, y: 0 },
    { x: 12, y: 0 },
    { x: 9, y: 2 },
    { x: 12, y: 2 },
    { x: 9, y: 1 },
    { x: 12, y: 1 },
    { x: 9, y: 3 },
    { x: 13, y: 3 },
    { x: 11, y: 0 },
    { x: 14, y: 0 },
    { x: 11, y: 2 },
    { x: 14, y: 2 },
    { x: 11, y: 1 },
    { x: 14, y: 1 },
    { x: 9, y: 3 },
    { x: 13, y: 3 },
    { x: 10, y: 0 },
    { x: 13, y: 0 },
    { x: 10, y: 2 },
    { x: 13, y: 2 },
    { x: 10, y: 1 },
    { x: 13, y: 1 },
  ];

  defense = 0;

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
    let i = 0;
    if (['Mountain', 'Wood', 'City', 'Base', 'HeadQuarter'].includes(this.left?.type)) i += 1;
    if (this.bottom?.type === 'Road') i += 2;
    if (this.top?.type === 'Road') i += 4;
    if (this.right?.type === 'Road') i += 8;
    if (this.left?.type === 'Road') i += 16;
    return i;
  }
}
</script>
