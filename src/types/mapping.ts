import { Component } from 'vue';
import PlainD from '@/components/terrains/plains/PlainD.vue';
import PlainS from '@/components/terrains/plains/PlainS.vue';
import PlainM from '@/components/terrains/plains/PlainM.vue';
import PlainSM from '@/components/terrains/plains/PlainSM.vue';
import MountainD from '@/components/terrains/mountains/MountainD.vue';
import RoadD from '@/components/terrains/roads/RoadD.vue';
import WoodD from '@/components/terrains/woods/WoodD.vue';
import HeadQuarterD from '@/components/buildings/hqs/HeadQuarterD.vue';
import BaseD from '@/components/buildings/bases/BaseD.vue';
import CityD from '@/components/buildings/cities/CityD.vue';
import { terrainName, buildingName } from '@/types/names.d';

const terrainByType: {[name in terrainName]: Component} = {
  PlainD,
  PlainS,
  PlainM,
  PlainSM,
  MountainD,
  RoadD,
  WoodD,
};

const buildingByType: {[name in buildingName]: Component} = {
  HeadQuarterD,
  BaseD,
  CityD,
};

export { terrainByType, buildingByType };
