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
import { terrainConfig, buildingConfig } from '@/types/config.d';

@Options({
  components: {
    HeadUpDisplay,
    Units,
    Buildings,
    Terrains,
  },
})
export default class Game extends Vue {
  zoom = 4;

  terrains: terrainConfig = [];

  buildings: buildingConfig = [];

  mounted(): void {
    this.$el.focus();
    this.terrains = [
      ['PlainD', 'WoodD', 'PlainD', 'PlainD'],
      ['RoadD', 'RoadD', 'RoadD', 'MountainD'],
      ['RoadD', 'PlainD', 'MountainD', 'MountainD'],
      ['RoadD', 'WoodD', 'WoodD', 'PlainD'],
    ];
    this.buildings = [
      [{ type: 'BaseD', owner: 0 }],
      [],
      [undefined, { type: 'CityD', owner: 0 }],
      [undefined, undefined, undefined, { type: 'HeadQuarterD', owner: 0 }],
    ];
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
