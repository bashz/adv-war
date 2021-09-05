<template>
  <div class="aw-building__base" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Building from '@/components/buildings/Building';

export default class Base extends Building {
  bgX = 6;

  bgY = 67;
}
</script>
