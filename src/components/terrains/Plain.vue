<template>
  <div class="aw-terrain__plain" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import MultiSprite from '@/components/MultiSprite';

export default class Plain extends mixins(Terrain, MultiSprite) {
  sprites = [
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 0 },
  ];

  defense = 1;

  moveCost = {
    clear: {
      Infantry: 1,
      Mechanic: 1,
      Tires: 2,
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

  mounted(): void {
    let i = this.spriteIndex;
    if (['Mountain', 'Wood', 'City', 'Base', 'HeadQuarter'].includes(this.left?.type)) i += 1;
    if (this.bottom?.type === 'Mountain') i += 2;
    this.spriteIndex = i;
  }
}
</script>
