<template>
  <div class="aw-unit__recon" :style="background">
    <status :ammo="lowAmmo" :fuel="lowFuel" :hp="hp"/>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Unit from '@/components/units/Unit';
import Animated from '@/components/Animated';
import { movementMean, unitFamily } from '@/types/entities.d';
import Weapon from '@/models/Weapon';

export default class Recon extends mixins(Unit, Animated) {
  cost = 4000;

  vision = 5;

  moves = 8;

  maxFuel = 80;

  movementType: movementMean = 'Tires';

  family: unitFamily = 'Vehicle';

  primaryWeapon = new Weapon('MGun', Infinity, { Infantry: 5, Vehicle: 1 }, this.primaryAmmo);

  sprites = [
    { x: 0, y: 10 },
    { x: 1, y: 10 },
  ];

  sequence = [40, 40];

  size = { w: 24, h: 24 };

  get spriteIndex(): number {
    return this.animationIndex;
  }
}
</script>
