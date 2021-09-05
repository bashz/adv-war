<template>
  <div class="aw-terrain__mountain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Mountain from '@/components/terrains/mountains/Mountain.vue';

export default class MountainFull extends Mountain {
  bgX = 5;

  bgY = 1;
}
</script>
