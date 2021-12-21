import { createStore } from 'vuex';
import { mapConfig, unitConfig } from '@/types/config.d';

const defaultState: {units: unitConfig, map: mapConfig, fileUrl: string } = {
  units: [],
  map: [],
  fileUrl: '',
};

// const normalizeUnits = (units: unitConfig) => units.map((unit) => unit);

export default createStore({
  state: defaultState,
  getters: {
  },
  mutations: {
    initGame(state, game) {
      state.map = game.map;
      state.units = game.units;
    },
    saveState(state) {
      const json = JSON.stringify({
        units: state.units,
        map: state.map,
      });
      state.fileUrl = URL.createObjectURL(new Blob([json], { type: 'text/json' }));
    },
    spawn(state, unit) {
      state.units = [...state.units, unit];
    },
    vanish(state, unit) {
      const index = state.units
        .findIndex((currentUnit) => currentUnit.x === unit.x && currentUnit.y === unit.y);
      state.units.splice(index, 1);
    },
  },
  actions: {
    initGame(context, game) {
      context.commit('initGame', game);
    },
    async loadGame(context, url) {
      const game = await (await fetch(url)).json();
      context.commit('initGame', game);
    },
    async loadSavedState(context, saveFile) {
      const game = JSON.parse(await saveFile.text());
      context.commit('initGame', game);
    },
    async saveState(context) {
      context.commit('saveState');
    },
    spawn(context, unit) {
      context.commit('spawn', unit);
    },
    vanish(context, unit) {
      context.commit('vanish', unit);
    },
  },
  modules: {
  },
});
