<template>
  <div class="aw-game" tabindex="0" :style="dimensions">
    <terrains class="aw-layer" :map="map"/>
    <buildings class="aw-layer" :map="map" :frame="frame"/>
    <units class="aw-layer" :units="units" :frame="frame"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Buildings from '@/components/layers/Buildings.vue';
import Terrains from '@/components/layers/Terrains.vue';
import Units from '@/components/layers/Units.vue';
import { mapConfig, unitConfig } from '@/types/config.d';

@Options({
  components: {
    Buildings,
    Terrains,
    Units,
  },
})
export default class Game extends Vue {
  map: mapConfig = [
    [
      { type: 'HeadQuarter', owner: 4 }, { type: 'Base', owner: 4 }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Plain' },
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' },
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Plain' }, { type: 'Base', owner: 3 }, { type: 'HeadQuarter', owner: 3 },
    ],
    [
      { type: 'Base', owner: 4 }, { type: 'Plain' }, { type: 'Plain' }, { type: 'City' }, { type: 'Wood' },
      { type: 'Mountain' }, { type: 'Plain' }, { type: 'Wood' }, { type: 'Mountain' }, { type: 'Mountain' },
      { type: 'Mountain' }, { type: 'City' }, { type: 'City' }, { type: 'Plain' }, { type: 'Base', owner: 3 },
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
      { type: 'Base', owner: 1 }, { type: 'Plain' }, { type: 'Plain' }, { type: 'City' }, { type: 'Wood' },
      { type: 'Wood' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Wood' }, { type: 'Plain' },
      { type: 'Plain' }, { type: 'City' }, { type: 'Plain' }, { type: 'Plain' }, { type: 'Base', owner: 2 },
    ],
    [
      { type: 'HeadQuarter', owner: 1 }, { type: 'Base', owner: 1 }, { type: 'Plain' }, { type: 'Wood' }, { type: 'City' },
      { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Mountain' }, { type: 'Wood' }, { type: 'Wood' },
      { type: 'Wood' }, { type: 'Wood' }, { type: 'Plain' }, { type: 'Base', owner: 2 }, { type: 'HeadQuarter', owner: 2 },
    ],
  ];

  units: unitConfig = [
    {
      type: 'Infantry', owner: 1, x: 0, y: 8,
    },
    {
      type: 'Mechanic', owner: 1, x: 7, y: 0,
    },
    {
      type: 'Recon', owner: 1, x: 5, y: 5,
    },
    {
      type: 'Tank', owner: 1, x: 4, y: 8,
    },
    {
      type: 'AntiAir', owner: 1, x: 1, y: 1,
    },
  ];

  zoom = 2;

  frame = -1;

  mounted(): void {
    this.$el.focus();
    cancelAnimationFrame(this.frame);
    // this.animate();
  }

  get dimensions(): {scale: number; width: string; margin: string} {
    const rows = this.map.length;
    const columns = (rows && this.map[0].length) || 0;
    return {
      scale: this.zoom,
      width: `${columns * 16 * this.zoom}px`,
      margin: `${16 * this.zoom}px auto`,
    };
  }

  animate(): void {
    this.frame = requestAnimationFrame(this.animate);
  }

  beforeUnmount(): void {
    cancelAnimationFrame(this.frame);
  }
}
</script>

<style lang="scss">
.aw-game {
  position: relative;
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
</style>
