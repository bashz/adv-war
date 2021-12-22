<template>
  <div class="aw-status__ammo" :style="background"/>
</template>

<script lang="ts">
import Sprite from '@/components/Sprite';

export default class Ammo extends Sprite {
  protected defaultSprite = { x: 11, y: 0 };

  size = { w: 8, h: 8 };
}
</script>

<style lang="scss">
.aw-status__ammo {
  position: absolute;
  top: 12px;
  left: 12px;
}
</style>
