<template>
   <div class="notifications">
      <h1 @click.prevent="showComponent()" >Notifications</h1>

         <div  v-if="show" v-for="item in formatDates()"
            v-bind:item="item"
            v-bind:key="item.id"
            class="single-notification"
            :class="{ 'active':item.seen  }">
            <img v-bind:src="item.icon"  alt=""> 
            <p>{{item.message}}</p>
            <p>{{item.dateTime}}</p>
         </div>

   </div>
</template>
<script>
  

   
   
export default {
	name: 'notification',

	data() {
		return {
			notifications: [],
			timestamps: [],
			show: false,

}
    
	},
	mounted() {
		this.axios.get('http://api.myjson.com/bins/19wyhe')
			.then(response => (this.notifications = response.data))
	},
	methods: {
		showComponent() {
			this.show ? this.show = false : this.show = true;
			this.notifications.sort((a,b)=>{
				return a - b
			})
		}, 	formatDates() {
			var formattedArray = this.notifications;
			formattedArray.forEach((notification, key) => {
				formattedArray[key].dateTime = this.moment(this.notifications[key].timestamp, 'X')
					.format('MMMM Do YYYY, h:mm:ss a');

			});

			return formattedArray;
		}
	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped   lang='scss'>
.notifications{
	margin:0 auto;
	max-width:700px;
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
			background-color: #5879ad;
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

	.active{
		background-color: #efefef;
		&:hover{
				background-color: #235787;
		}
	}
}

</style>