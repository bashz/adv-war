<template>
  <div class="aw-layer__hud" :style="zIndex">
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
export default class HeadUpDisplay extends Layer {
  elevation = 8;
}
</script>
