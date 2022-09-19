<template>
  <div class="text-center">
    <h3>Filtrar por contienetes</h3>

    <div class="btn-group">
      <button type="button" class="btn btn-dark" @click="filtro('')">ALL</button>
      <button type="button"  class="btn btn-dark" @click="filtro('Americas')">AM</button>
      <button type="button" class="btn btn-dark" @click="filtro('Europe')">EU</button>
      <button type="button" class="btn btn-dark" @click="filtro('Africa')">AF</button>
      <button type="button" class="btn btn-dark" @click="filtro('Asia')">AS</button>
      <button type="button" class="btn btn-dark" @click="filtro('Oceania')">OC</button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const filtro =  (region) => {
       store.dispatch('filtrarRegion', region)
    };
    return{filtro}
  },
};
</script>
