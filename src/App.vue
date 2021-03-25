<template>
<div>
  <h3>layout{{a}}</h3>
  <router-view/>

</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup(){
    const a = ref(0)
    return{
      a
    }
  }
})
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>