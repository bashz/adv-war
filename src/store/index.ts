import { createStore } from 'vuex';
import { mapConfig, unitConfig } from '@/types/config.d';

const defaultState: {units: unitConfig, map: mapConfig } = {
  units: [],
  map: [],
};

export default createStore({
  state: defaultState,
  getters: {
  },
  mutations: {
    initGame(state, game) {
      state.map = game.map;
      state.units = game.units;
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
    async loadSaveState(context, saveFile) {
      const game = JSON.parse(await saveFile.text());
      context.commit('initGame', game);
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
