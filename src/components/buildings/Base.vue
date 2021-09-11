<template>
  <div class="aw-building__base" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import MultiSprite from '@/components/MultiSprite';

export default class Base extends mixins(Building, MultiSprite) {
  sprites = [
    { x: 6, y: 57 },
    { x: 6, y: 59 },
    { x: 6, y: 61 },
    { x: 6, y: 63 },
    { x: 6, y: 65 },
    { x: 6, y: 67 },
  ];

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

  get spriteIndex() {
    return this.owner;
  }
}
</script>
