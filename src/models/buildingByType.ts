import { Component } from 'vue';
import HeadQuarter from '@/components/buildings/HeadQuarter.vue';
import Base from '@/components/buildings/Base.vue';
import City from '@/components/buildings/City.vue';
import { buildingType } from '@/types/config.d';

const buildingByType: {[Type in buildingType]: Component} = {
  HeadQuarter,
  Base,
  City,
};

export default buildingByType;
