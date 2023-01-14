<template>
	<div class="NavBar">
		<router-link to="/"><img class="logoHome" src="https://i.postimg.cc/GtyRRb7H/swerik-logo.gif" alt=""></router-link>
		<nav>
			
		<h1 id="navText">Portfolio of Camryn Herandien</h1>
			
			


			
			
			<router-link to="/contact">Contact Me</router-link>
			<router-link to="/testimonials">Testimonials</router-link>
			<router-link to="/projects">Projects</router-link>
			<router-link to="/resume">Resume'</router-link>
	  <router-link to="/about">About</router-link>
	 
			


		</nav>
	</div>
</template>
<script>
export default{
	name:'NavBar'
}

</script>
<style>

.NavBar {
	box-shadow: BLACK 10PX 10PX 10px;
  background-color: lightgrey;
  
margin-left:auto;
width: 100%;
position: unset;

}

/* Style the links inside the navigation bar */
.NavBar a {
  float: right;
  color: whitesmoke;
  text-align: center;
  padding: 10px 10px;
  text-decoration: none;
  font-size: 15px;


}

/* Change the color of links on hover */
.NavBar a:hover {
  background-color: gainsboro;
  color: lightgrey;
}

/* Add a color to the active/current link */
.NavBar a.active {
  background-color: lightblue;
  color: white;
}
.logoHome{
	border-radius: 100%;
	float: inline-start;
	width: 50px;
	height: 50px;
	margin-right: 100%;
	
}
#navText{
	float: left;
	text-transform: capitalize;
	text-decoration: solid;
	text-shadow: black 1px 2px 1px;
	color: whitesmoke;
	
}

</style>