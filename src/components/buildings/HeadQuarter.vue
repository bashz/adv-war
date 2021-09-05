<template>
  <div class="aw-building__head-quarter" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Building from '@/components/buildings/Building';

export default class HeadQuarter extends Building {
  bgY = 67;
}
</script>
