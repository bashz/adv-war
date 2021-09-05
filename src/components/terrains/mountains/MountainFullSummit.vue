<template>
  <div class="aw-terrain__mountain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Mountain from '@/components/terrains/mountains/Mountain.vue';

export default class MountainFullSummit extends Mountain {
  bgX = 6;

  bgY = 1;
}
</script>
