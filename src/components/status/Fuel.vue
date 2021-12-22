<template>
  <div class="aw-status__fuel" :style="background"/>
</template>

<script lang="ts">
import Sprite from '@/components/Sprite';

export default class Fuel extends Sprite {
  protected defaultSprite = { x: 10, y: 0 };

  size = { w: 8, h: 8 };
}
</script>

<style lang="scss">
.aw-status__fuel {
  position: absolute;
  top: 8px;
  left: 12px;
}
</style>
