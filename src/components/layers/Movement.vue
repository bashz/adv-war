<template>
  <div class="aw-layer__movement" :style="zIndex">
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
export default class Movement extends Layer {
  elevation = 6;
}
</script>
