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
}
</script>
