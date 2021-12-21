<template>
  <div class="aw-unit__mechanic" :style="background"/>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';
import { movementMean } from '@/types/entities.d';
import Weapon from '@/models/Weapon';

export default class Mechanic extends mixins(Unit, Animated) {
  cost = 3000;

  vision = 2;

  moves = 2;

  maxFuel = 70;

  movementType: movementMean = 'Mechanic';

  primaryWeapon = new Weapon('Bazooka', 3, { Infantry: 2, Vehicle: 3 }, this.primaryAmmo);

  altWeapon = new Weapon('MGun', Infinity, { Infantry: 4, Vehicle: 1 }, this.altAmmo);

  sprites = [
    { x: 0, y: 5 },
    { x: 1, y: 5 },
  ];

  sequence = [40, 40];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
