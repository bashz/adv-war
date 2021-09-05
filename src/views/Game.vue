<template>
  <div class="aw-game" tabindex="0">
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
import { terrainTile, buildingTile } from '@/types/config.d';

@Options({
  components: {
    HeadUpDisplay,
    Units,
    Buildings,
    Terrains,
  },
})
export default class Game extends Vue {
  terrains: Array<Array<terrainTile>> = [];

  buildings: Array<Array<buildingTile | undefined>> = [];

  mounted(): void {
    this.$el.focus();
    this.terrains = [
      ['Plain', 'Wood', 'Plain', 'Plain'],
      ['Road', 'Road', 'Road', 'Mountain'],
      ['Road', 'Plain', 'Mountain', 'Mountain'],
      ['Road', 'Wood', 'Wood', 'Plain'],
    ];
    this.buildings = [
      [],
      [{ type: 'Base', owner: 0 }],
      [undefined, { type: 'City', owner: 0 }],
      [undefined, undefined, undefined, { type: 'HeadQuarter', owner: 0 }],
    ];
  }
}
</script>

<style lang="scss">
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
