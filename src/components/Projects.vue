<template>
	<div class="Projects">
		<h1>My Projects</h1>
		<div class="grid-container">

			<div class="card-project" v-for="project in projects" :key="project">
	  <img class="img" :src="project.image" alt="Avatar" style="width:60px">
	  <div class="container">
		<h4 v-text="project.name"></h4>
		<!-- <p v-text="project.live"></p> -->
		<!-- <p v-text="project.git"></p> -->
		<a :href="project.git" target="_blank">GitHub Link</a> 
		<a :href="project.live" target="_blank">Live Netlify Link</a>
		
	  </div>
	</div>

		</div>
	</div>
</template>
<script>
export default{
	name:'Projects',
	data() {
		return {
			projects:[
				{
					name:"PEP stores (ecommerce)",
					live: "https://pepstoreshub.netlify.app",
					git: "https://github.com/Camryn96/ecommerce.git",
					image:"https://i.postimg.cc/sg59mrLV/download.png"
				},
				{
					name:"Drops(ecommerce)",
					live: "https://bespoke-palmier-fd69e0.netlify.app",
					git: "https://github.com/Camryn96/DropsRetail.git",
					image:"https://i.postimg.cc/zB4FpGqG/download.png"
				},
				{
					name:"Portfolio(v1)",
					live: "https://portfolio-camryn.netlify.app",
					git: "https://github.com/Camryn96/portfolio.git",
					image:"https://i.postimg.cc/Pq9DnV96/download.png"
				},
				{
					name: "JavaScript Calculator",
					live: "https://calculator211122.netlify.app",
					git: "https://github.com/Camryn96/calculator.git",
					image: "https://i.postimg.cc/VkHrXHfY/download.png"
				},
				{
					name: "Playground/Random work(Animation)",
					live: "https://glowing-vacherin-bfbee7.netlify.app",
					git: "https://github.com/Camryn96/AnimationExercise.git",
					image: "https://i.postimg.cc/2yw3y09N/download.png"
				},
				{
					name: "Playground (for fun)",
					live: "https://euphonious-madeleine-a5da72.netlify.app",
					git: "https://github.com/Camryn96/exercises.git",
					image: "https://i.postimg.cc/dtVVnmSD/download.png"
				},
			]
		}
	},
}
</script>
<style>
.card-project{

  background-color: #2196F3;
  padding: 10px;
  height: auto;
  text-align: center;
}
.grid-container{
	text-align: center;
	display: grid;
  grid-template-columns: auto auto auto;
  padding:50px
  
}
.img{
	border-radius: 9999px;
}


</style>