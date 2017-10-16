<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    this.$store.axios=this.axios;
  }
}
</script>

<style>
</style>
