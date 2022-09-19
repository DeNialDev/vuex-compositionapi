<template>
  <div class="card mb-2 p-4">
    <h5 class="text-center">{{ pais.name}}</h5>
    <p class="text-center">
        <img :src="pais.flag" alt="" class="img-fluid w-50">
    </p>
    <p class="card-text">
      <span class="badge bg-info d-block mb-1"
        >Capital: {{ pais.capital }}</span
      >
      <span class="badge bg-secondary d-block mb-1"
        >Continente: {{ pais.region }}</span
      >
      <span class="badge bg-info d-block mb-1"
        >Población: {{ formatNumber(pais.population) }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["pais"],

  setup() {
    const formatNumber = (number) => {
      return new Intl.NumberFormat("de-DE").format(number);
    };
    return { formatNumber };
  },
};
</script>
