import { Component } from 'vue';
import Plain from '@/components/terrains/plains/Plain.vue';
import PlainShadow from '@/components/terrains/plains/PlainShadow.vue';
import PlainSummit from '@/components/terrains/plains/PlainSummit.vue';
import PlainShadowSummit from '@/components/terrains/plains/PlainShadowSummit.vue';
import Mountain from '@/components/terrains/mountains/Mountain.vue';
import MountainFull from '@/components/terrains/mountains/MountainFull.vue';
import MountainSummit from '@/components/terrains/mountains/MountainSummit.vue';
import MountainFullSummit from '@/components/terrains/mountains/MountainFullSummit.vue';
import Road from '@/components/terrains/roads/Road.vue';
import Wood from '@/components/terrains/woods/Wood.vue';
import HeadQuarter from '@/components/buildings/hqs/HeadQuarter.vue';
import Base from '@/components/buildings/bases/Base.vue';
import City from '@/components/buildings/cities/City.vue';
import { terrainName, buildingName } from '@/types/names.d';

const terrainByType: {[name in terrainName]: Component} = {
  Plain,
  PlainShadow,
  PlainSummit,
  PlainShadowSummit,
  Mountain,
  MountainFull,
  MountainSummit,
  MountainFullSummit,
  Road,
  Wood,
};

const buildingByType: {[name in buildingName]: Component} = {
  HeadQuarter,
  Base,
  City,
};

export { terrainByType, buildingByType };
