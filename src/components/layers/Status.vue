<template>
  <div class="aw-layer__status" :style="zIndex">
    <hp v-if="hp" :hp="hp" :style="background" class="aw-status"/>
    <fuel v-if="fuel" :style="background" class="aw-status"/>
    <ammo v-if="ammo" :style="background" class="aw-status"/>
  </div>
</template>

<script lang="ts">
import { Options } from 'vue-class-component';
import Layer from '@/components/layers/Layer';
import Hp from '@/components/status/Hp.vue';
import Fuel from '@/components/status/Fuel.vue';
import Ammo from '@/components/status/Ammo.vue';

@Options({
  components: {
    Hp,
    Fuel,
    Ammo,
  },
  props: {
    hp: Number,
    fuel: { type: Boolean, default: false },
    ammo: { type: Boolean, default: false },
  },
})
export default class Status extends Layer {
  hp!: number;

  fuel!: boolean;

  ammo!: boolean;

  elevation = 4;

  spriteFile = '/img/status.png';
}
</script>

<style lang="scss">
.aw-status {
  width: 8px;
  height: 8px;
}
</style>
