<template>
  <div class="aw-unit__anti-air" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';
import { movementMean, unitFamily } from '@/types/entities.d';
import Weapon from '@/models/Weapon';

export default class AntiAir extends mixins(Unit, Animated) {
  cost = 8000;

  vision = 2;

  moves = 6;

  maxFuel = 60;

  movementType: movementMean = 'Tread';

  family: unitFamily = 'Vehicle';

  primaryWeapon = new Weapon('Vulcan', 9, { Infantry: 5, Vehicle: 3 }, this.primaryAmmo);

  sprites = [
    { x: 0, y: 12 },
    { x: 1, y: 12 },
  ];

  sequence = [40, 40];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
