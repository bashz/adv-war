<template>
  <div class="aw-terrain__plain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Plain from '@/components/terrains/plains/Plain.vue';

export default class PlainShadowSummit extends Plain {
  bgX = 5;
}
</script>
