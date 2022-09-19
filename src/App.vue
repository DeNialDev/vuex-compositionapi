<template>
  <div class="container">
    <h1 class="text-center">Paises api</h1>
    <Continent/> 
    <Search/>
    <CardList />
    
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import Continent from "./components/Continent.vue";
import Search from "@/components/Search.vue"
export default {
  name: "App",
  components: {
    CardList,
    Continent,
    Search
  },
};
</script>
