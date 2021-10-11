import { Component } from 'vue';
import Plain from '@/components/terrains/Plain.vue';
import Mountain from '@/components/terrains/Mountain.vue';
import Road from '@/components/terrains/Road.vue';
import Wood from '@/components/terrains/Wood.vue';
import HeadQuarter from '@/components/buildings/HeadQuarter.vue';
import Base from '@/components/buildings/Base.vue';
import City from '@/components/buildings/City.vue';
import { terrainType, buildingType } from '@/types/config.d';

const terrainByType: {[Type in terrainType]: Component} = {
  Plain,
  Mountain,
  Road,
  Wood,
};

const buildingByType: {[Type in buildingType]: Component} = {
  HeadQuarter,
  Base,
  City,
};

export { terrainByType, buildingByType };
