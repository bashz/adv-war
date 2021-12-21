<template>
  <div class="aw-unit__tank" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';
import { movementMean, unitFamily } from '@/types/entities.d';
import Weapon from '@/models/Weapon';

export default class Tank extends mixins(Unit, Animated) {
  cost = 7000;

  vision = 3;

  moves = 6;

  maxFuel = 70;

  movementType: movementMean = 'Tread';

  family: unitFamily = 'Vehicle';

  primaryWeapon = new Weapon('Cannon', 9, { Infantry: 1, Vehicle: 4 }, this.primaryAmmo);

  altWeapon = new Weapon('MGun', Infinity, { Infantry: 4, Vehicle: 1 }, this.altAmmo);

  sprites = [
    { x: 0, y: 11 },
    { x: 1, y: 11 },
    { x: 2, y: 11 },
    { x: 1, y: 11 },
  ];

  sequence = [20, 20, 20, 20];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
