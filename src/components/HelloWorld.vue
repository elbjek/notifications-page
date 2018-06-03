<template>
   <div class="notifications">
      <h1 @click.prevent="showComponent()" >Notifications</h1>

         <div  v-if="show"  v-for="item in notifications"
            v-bind:item="item"
            v-bind:key="item.id"
            class="single-notification"
            :class="{ 'active':(isSeen)  }">
            <img v-bind:src="item.icon"  alt=""> 
            <p>{{item.message}}</p>
            <p @click="getDate()" >{{getDate}}</p>
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
	data() {
		return {
			notifications: [],
			timestamps: [],
			show: false,
			isSeen:false,

 
    }
    
	},
	mounted() {
		axios.get('https://api.myjson.com/bins/19wyhe')
			.then(response => (this.notifications = response.data))
			.catch(function (error) {
				console.log(error);
			})


	},
	methods: {
	    showComponent() {
	        this.show ? this.show = false : this.show = true;
			var arraySort = require('array-sort');
	        arraySort(this.notifications, 'timestamp');
	    },
	},
	computed:{

		getDate(){
			for (var i = 0; i < this.notifications.length; i++) {
				var time =	moment(this.notifications[i].timestamp).format(' h:mm:ss a');
				console.log(time)
				 return time
			}
	
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   lang='scss'>
.notifications{
	margin:0 auto;
	max-width:550px;
	background-color: #FDFFFC;
	padding-top: 0;
	cursor:pointer;	

	h1{
		color:#FDFFFC;
		font-weight: bolder;
		background-color: #C1292E;
		font-size: 18px;
		padding:5px;
		margin:0px;
	}
	.single-notification{
		display:flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 5px 10px;
		
		&:hover{
			background-color: #235789;
			color:#FDFFFC;
			font-weight: bolder;
			
		}
		img{
			height:30px;
		}
		p{
			// margin:0;
			font-size: 15px;
		}
	}
}

</style>