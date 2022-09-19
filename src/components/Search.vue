<template>
  <input 
    type="text"
    placeholder="Type pais"
    class="form-control my-3"
    v-model="text"
    @keyup="proccessInput"
  />
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    const text  = ref('')
    const proccessInput = () => {
      store.dispatch('filtrarNombre', text.value)
    }
    return{text, proccessInput}
  }
}
</script>
