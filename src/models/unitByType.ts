import { Component } from 'vue';
import Infantry from '@/components/units/Infantry.vue';
import Mechanic from '@/components/units/Mechanic.vue';
import Recon from '@/components/units/Recon.vue';
import Tank from '@/components/units/Tank.vue';
import AntiAir from '@/components/units/AntiAir.vue';

import { unitType } from '@/types/config.d';

const unitByType: {[Type in unitType]: Component} = {
  Infantry,
  Mechanic,
  Recon,
  Tank,
  AntiAir,
};

export default unitByType;
