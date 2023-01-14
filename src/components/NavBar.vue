<template>
	<div class="NavBar">
		
		<nav>
	  <router-link to="/">Home</router-link>
	  <router-link to="/about">About</router-link>
	  <router-link to="/resume">Resume'</router-link>
	  <router-link to="/projects">Projects</router-link>
	  <router-link to="/testimonials">Testimonials</router-link>
	  <router-link to="/contact">Contact Me</router-link>
			


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
  float: left;
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
.logo{
	border-radius: 100%;
	
}

</style>