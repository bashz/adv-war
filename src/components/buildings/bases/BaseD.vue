<template>
  <div class="aw-building__base" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Base from '@/components/buildings/bases/Base';
import Tile from '@/components/Tile';

export default class BaseD extends mixins(Tile, Base) {
  bgX = 6;

  bgY = 67;
}
</script>
