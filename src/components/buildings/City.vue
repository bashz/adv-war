<template>
  <div class="aw-building__city" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Building from '@/components/buildings/Building';

export default class City extends Building {
  bgX = 5;

  bgY = 57;
}
</script>
