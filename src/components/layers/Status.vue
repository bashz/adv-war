<template>
  <div class="aw-layer__status" :style="style">
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
export default class Status extends Layer {
  elevation = 4;
}
</script>
