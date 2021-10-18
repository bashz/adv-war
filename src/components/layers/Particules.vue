<template>
  <div class="aw-layer__vision" :style="zIndex">
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
export default class Particules extends Layer {
  elevation = 7;
}
</script>
