import { createStore } from "vuex";

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch("https://restcountries.com/v2/all");
        const data = await res.json();
        commit("setPaises", data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter(pais =>
        pais.region.includes(region)
      );
      commit("setPaisesFiltrados", filtro);
    },
    filtrarNombre({commit, state}, text){
      const txtClient = text.toLowerCase()
      const filtrer = state.paises.filter(pais =>{
        const textApi = pais.name.toLowerCase()
        if(textApi.includes(txtClient)){
          return pais
        }
      })
      commit('setPaisesFiltrados', filtrer)
    }
  },
  getters: {
    topPaises(state) {
      return state.paisesFiltrados.sort((a, b) =>
        a.population < b.population ? 1 : -1
      );
    },
  },
  modules: {},
});
