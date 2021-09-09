<template>
  <div class="aw-building__city" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Building from '@/components/buildings/Building';
import MultiSprite from '@/components/MultiSprite';

export default class city extends mixins(Building, MultiSprite) {
  sprites = [
    { x: 5, y: 57 },
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
}
</script>
