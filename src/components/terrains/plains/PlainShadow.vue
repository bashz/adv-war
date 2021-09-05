<template>
  <div class="aw-terrain__plain" :style="{...bg, ...position}"/>
</template>

<script lang="ts">
import Plain from '@/components/terrains/plains/Plain.vue';

export default class PlainShadow extends Plain {
  bgX = 3;
}
</script>
