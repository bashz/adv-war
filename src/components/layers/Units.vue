<template>
  <div class="aw-layer__units" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import Layer from '@/components/layers/Layer';

@Options({
  components: {
  },
})
export default class Units extends Layer {
  elevation = 3;

  spriteFile = '/img/population.png';
}
</script>

<style lang="scss">
.aw-unit {
  width: 24px;
  height: 24px;
}
</style>
