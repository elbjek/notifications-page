<template>
  <div id="app">

    <notification />
  </div>
</template>

<script>
import notification from './components/notification.vue'
export default {
  name: 'app',
  components: {
    notification
  },
  data(){
    return{
      show:false
    }
  }

}
</script>

<style lang="scss">
body{
  background-color: #D3D0CB;
}
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a{
    text-decoration: none;
  }
}
</style>
