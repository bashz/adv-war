<template>
  <div class="aw-terrain__mountain" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Terrain from '@/components/terrains/Terrain';
import MultiSprite from '@/components/MultiSprite';

export default class Mountain extends mixins(Terrain, MultiSprite) {
  sprites = [
    { x: 4, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 0 },
    { x: 6, y: 1 },
  ];

  defense = 4;

  moveCost = {
    clear: {
      Infantry: 2,
      Mechanic: 1,
      Tires: Infinity,
      Tread: Infinity,
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
    if (this.top?.type === 'Mountain' || this.top?.type === 'Plain') i += 1;
    if (this.bottom?.type === 'Mountain') i += 2;
    this.spriteIndex = i;
  }
}
</script>
