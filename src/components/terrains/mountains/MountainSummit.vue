<template>
  <div class="aw-terrain__mountain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Mountain from '@/components/terrains/mountains/Mountain.vue';

export default class MountainSummit extends Mountain {
  bgX = 6;
}
</script>
