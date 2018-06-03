<template>


  <div class="notification">
<div id="single-notification" v-if="show" v-for="item in notifications"
      v-bind:item="item"
      v-bind:key="item.id"
      class="single-notification">
  <img v-bind:src="item.icon"  alt=""> 
  <p>{{item.message}}</p>
  <p @click="showNotifications()" >{{item.timestamp}}</p>
</div>


  


  </div>
</template>

<script>

import axios from 'axios';
import moment,{ isDuration } from 'moment';


export default {
  name: 'HelloWorld',
  props: {
    msg: String,
   
  },
  data(){
return{
  notifications:[],
  timestamps:[],
  show:true
}
  },
    mounted(){
    axios.get('https://api.myjson.com/bins/19wyhe')
  .then(response => (this.notifications = response.data))
  .catch(function (error) {
    console.log(error);
  })

  },
  methods:{
    showNotifications(){
      var arraySort = require('array-sort');
        arraySort(this.notifications, 'timestamp');

 },

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   lang='scss'>

.notification{
  max-width:500px;
  background-color: pink;
  margin:0 auto;
  .single-notification{
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border:1px solid black;
    padding:10px;
    
    img{
      height: 30px;
    }
  }
  .gray{
    background-color: gray;
  }
}
</style>
