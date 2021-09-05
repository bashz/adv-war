<template>
  <div class="aw-layer__hud" :style="style">
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
  elevation = 4;
}
</script>
