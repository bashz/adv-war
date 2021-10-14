import { Component } from 'vue';
import Plain from '@/components/terrains/Plain.vue';
import Mountain from '@/components/terrains/Mountain.vue';
import Road from '@/components/terrains/Road.vue';
import Wood from '@/components/terrains/Wood.vue';

import { terrainType } from '@/types/config.d';

const terrainByType: {[Type in terrainType]: Component} = {
  Plain,
  Mountain,
  Road,
  Wood,
};

export default terrainByType;
