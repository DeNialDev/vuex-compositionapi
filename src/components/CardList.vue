<script>
import { useStore } from "vuex";
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
import Card  from "./Card.vue";
import Continent from "./Continent.vue";
export default {
    components: { Card, Continent },
    setup() {
        const store = useStore();
        const paises = computed(() => {
            return store.getters.topPaises;
        });
        onMounted(async() => {
            await store.dispatch("getPaises");
            await store.dispatch("filtrarRegion", "")
        });
        return { paises };
    },
    
};
</script>

<template>
  <div class="row">
    <div 
    class="col-12"
    v-for="pais in paises" :key="pais.name"
    >
    
    <Card :pais="pais"/>
     
    </div>
  </div>
</template>
