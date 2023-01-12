<template>
	<div class="Projects">
		<h1>My Projects</h1>
		<div class="card" v-for="project in projects" :key="project">
  <img :src="project.image" alt="Avatar" style="width:60px">
  <div class="container">
    <h4 v-text="project.name"></h4>
    <p v-text="project.live"></p>
    <p v-text="project.git"></p>
	<a :href="project.git" target="_blank">GitHub Link</a>
    
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
					live: "",
					git: "https://github.com/Camryn96/ecommerce.git",
					image:"https://i.postimg.cc/7PsyKCb9/download.jpg"
				},
				{
					name:"Drops(ecommerce)",
					live: "",
					git: "https://github.com/Camryn96/DropsRetail.git",
					image:"https://i.postimg.cc/7PsyKCb9/download.jpg"
				},
				{
					name:"Portfolio(v1)",
					live: "",
					git: "https://github.com/Camryn96/portfolio.git",
					image:"https://i.postimg.cc/7PsyKCb9/download.jpg"
				},
				
			]
		}
	},
}
</script>