<template>
  <NavigationBar />
  <BottomBar />
</template>

<script>
import BottomBar from './components/BottomBar.vue';
import NavigationBar from './components/NavigationBar.vue';


export default {
  name: 'App',
  components: {
    BottomBar,
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
