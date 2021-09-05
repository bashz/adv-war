<template>
  <div class="aw-terrain__mountain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Terrain from '@/components/terrains/Terrain';

export default class Mountain extends Terrain {
  bgX = 4;

  defense = 4;

  moveCost = {
    Infantry: 2,
    Mechanic: 1,
    Tires: Infinity,
    Tread: Infinity,
  };
}
</script>
