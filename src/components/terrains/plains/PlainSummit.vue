<template>
  <div class="aw-terrain__plain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Plain from '@/components/terrains/plains/Plain.vue';

export default class PlainSummit extends Plain {
  bgX = 4;

  bgY = 1;
}
</script>
