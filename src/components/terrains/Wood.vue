<template>
  <div class="aw-terrain__wood" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Terrain from '@/components/terrains/Terrain';

export default class Wood extends Terrain {
  bgX = 1;

  defense = 2;

  moveCost = {
    Infantry: 1,
    Mechanic: 1,
    Tires: 3,
    Tread: 2,
  };
}
</script>
