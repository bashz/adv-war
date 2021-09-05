<template>
  <div class="aw-terrain__road" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Terrain from '@/components/terrains/Terrain';

export default class Road extends Terrain {
  bgX = 9;

  bgY = 3;

  defense = 0;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 1,
    Tread: 1,
  };
}
</script>
