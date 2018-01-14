<template>
  <div class="spinner">{{title}}</div>
</template>
<script>
  export default {
    data(){
      return {
        title:'loading...'
      }
    }
  }
</script>
<style>
  @import "./loading.css";
</style>
