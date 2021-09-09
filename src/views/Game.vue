<template>
  <div class="aw-game" tabindex="0" :style="scale">
    <terrains class="aw-layer" :map="map"/>
    <buildings class="aw-layer" :map="map"/>
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
import { mapConfig } from '@/types/config.d';

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
    [
      { type: 'HeadQuarter' }, { type: 'Base' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Plain' },
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' },
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Base' }, { type: 'HeadQuarter' },
    ],
    [
      { type: 'Base' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'City' }, { type: 'Wood' },
      { type: 'Mountain' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'Mountain' }, { type: 'Mountain' },
      { type: 'Mountain' }, { type: 'City' }, { type: 'City' }, { type: 'Plain' }, { type: 'Base' },
    ],
    [
      { type: 'Plain' }, { type: 'Plain' }, { type: 'City' }, { type: 'Wood' }, { type: 'Wood' },
      { type: 'Wood' }, { type: 'Wood' }, { type: 'Wood' }, { type: 'Mountain' }, { type: 'Plain' },
      { type: 'Plain' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'Plain' }, { type: 'Plain' },
    ],
    [
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Wood' },
      { type: 'Plain' }, { type: 'Wood' }, { type: 'City' }, { type: 'Wood' }, { type: 'Wood' },
      { type: 'Wood' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Mountain' }, { type: 'Mountain' },
    ],
    [
      { type: 'Mountain' }, { type: 'City' }, { type: 'Wood' }, { type: 'Plain' }, { type: 'Plain' },
      { type: 'Wood' }, { type: 'City' }, { type: 'Base' }, { type: 'City' }, { type: 'Wood' },
      { type: 'Plain' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'City' }, { type: 'Mountain' },
    ],
    [
      { type: 'Mountain' }, { type: 'City' }, { type: 'Wood' }, { type: 'Wood' }, { type: 'Plain' },
      { type: 'Wood' }, { type: 'Wood' }, { type: 'City' }, { type: 'Wood' }, { type: 'Plain' },
      { type: 'Plain' }, { type: 'Wood' }, { type: 'Wood' }, { type: 'City' }, { type: 'Mountain' },
    ],
    [
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Wood' }, { type: 'Plain' }, { type: 'Plain' },
      { type: 'Plain' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'Wood' }, { type: 'Plain' },
      { type: 'Wood' }, { type: 'Wood' }, { type: 'Wood' }, { type: 'Mountain' }, { type: 'Mountain' },
    ],
    [
      { type: 'Plain' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'Plain' }, { type: 'Wood' },
      { type: 'Plain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Plain' },
      { type: 'Wood' }, { type: 'Plain' }, { type: 'City' }, { type: 'Plain' }, { type: 'Plain' },
    ],
    [
      { type: 'Base' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'City' }, { type: 'Wood' },
      { type: 'Wood' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Wood' }, { type: 'Plain' },
      { type: 'Plain' }, { type: 'City' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Base' },
    ],
    [
      { type: 'HeadQuarter' }, { type: 'Base' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'City' },
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Wood' }, { type: 'Wood' },
      { type: 'Wood' }, { type: 'Wood' }, { type: 'Plain' }, { type: 'Base' }, { type: 'HeadQuarter' },
    ],
  ];

  zoom = 4;

  mounted(): void {
    this.$el.focus();
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

.aw-sprite {
  background-image: url('/sprites.png');
}
</style>
