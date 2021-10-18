<template>
  <div class="aw-layer__units" :style="zIndex">
    <tile v-for="(unit, i) in units" :key="i" :x="unit.x" :y="unit.y">
      <component
        :is="getUnit(unit)"
        :style="background"
        :frame="frame"
        class="aw-unit"
      />
    </tile>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import { Component } from 'vue';
import Layer from '@/components/layers/Layer';
import Tile from '@/components/Tile.vue';
import { unitTile, unitConfig } from '@/types/config.d';
import unitByType from '@/models/unitByType';

const getUnit = (tile: unitTile): Component => unitByType[tile.type];

@Options({
  components: {
    Tile,
  },
  props: {
    units: Array,
    frame: Number,
  },
})
export default class Units extends Layer {
  readonly units!: unitConfig;

  elevation = 3;

  spriteFile = '/img/population.png';

  getUnit = getUnit;
}
</script>

<style lang="scss">
.aw-unit {
  width: 24px;
  height: 24px;
}
</style>
