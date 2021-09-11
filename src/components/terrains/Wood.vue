<template>
  <div class="aw-terrain__wood" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import MultiSprite from '@/components/MultiSprite';

export default class Wood extends mixins(Terrain, MultiSprite) {
  sprites = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ];

  defense = 2;

  moveCost = {
    clear: {
      Infantry: 1,
      Mechanic: 1,
      Tires: 3,
      Tread: 2,
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
    return i;
  }
}
</script>
