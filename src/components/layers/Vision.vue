<template>
  <div class="aw-layer__vision" :style="style">
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
export default class Vision extends Layer {
  elevation = 4;
}
</script>
