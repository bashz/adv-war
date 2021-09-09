<template>
  <div class="aw-building__head-quarter" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import MultiSprite from '@/components/MultiSprite';

export default class HeadQuarter extends mixins(Building, MultiSprite) {
  sprites = [
    { x: 4, y: 67 },
  ];

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
}
</script>
