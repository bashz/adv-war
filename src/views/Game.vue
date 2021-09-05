<template>
  <div class="aw-game" tabindex="0" :style="scale">
    <terrains class="aw-layer" :tiles="terrains"/>
    <buildings class="aw-layer" :tiles="buildings"/>
    <units class="aw-layer"/>
    <head-up-display class="aw-layer"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeadUpDisplay from '@/components/layers/HeadUpDisplay.vue';
import Units from '@/components/layers/Units.vue';
import Buildings from '@/components/layers/Buildings.vue';
import Terrains from '@/components/layers/Terrains.vue';
import {
  terrainConfig, buildingConfig, mapConfig, unitConfig,
} from '@/types/config.d';
import mapToLayers from '@/helpers/mapToLayers';

@Options({
  components: {
    HeadUpDisplay,
    Units,
    Buildings,
    Terrains,
  },
})
export default class Game extends Vue {
  map: mapConfig = [
    [{ type: 'Plain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Plain' }],
    [{ type: 'Plain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Plain' }],
    [{ type: 'Plain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Plain' }],
    [{ type: 'Plain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Plain' }],
  ];

  zoom = 8;

  terrains: terrainConfig = [];

  buildings: buildingConfig = [];

  units: unitConfig = [];

  mounted(): void {
    this.$el.focus();
    const layers = mapToLayers(this.map);
    this.terrains = layers.terrains;
    this.buildings = layers.buildings;
    this.units = layers.units;
  }

  get scale(): {transform: string} {
    return { transform: `scale(${this.zoom})` };
  }
}
</script>

<style lang="scss">
.aw-game {
  position: relative;
  width: 0;
  transform-origin: left;

  &:focus {
    outline: none;
    border: none;
  }
}

.aw-layer {
  position: relative;
  top: 0;
  left: 0;
}

.aw-tile {
  position: absolute;
  display: block;
  background-image: url('/sprites.png');
}
</style>
