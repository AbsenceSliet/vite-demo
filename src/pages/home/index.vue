<template>
    <div class="home">
      home page
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup(){
    onMounted(()=>{
      console.log('home page in')
    })
  }
})
</script>
<style lang="scss" scoped>
  .home{
    font-size: 20px;
  }
</style>