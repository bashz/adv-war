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
import store from '@/store';

@Options({
  components: {
    Buildings,
    Terrains,
    Units,
  },
})
export default class Game extends Vue {
  // eslint-disable-next-line class-methods-use-this
  get map(): mapConfig {
    return store.state.map;
  }

  // eslint-disable-next-line class-methods-use-this
  get units(): unitConfig {
    return store.state.units;
  }

  zoom = 2;

  frame = -1;

  mounted(): void {
    store.dispatch('loadGame', '/maps/4p1.json');
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
