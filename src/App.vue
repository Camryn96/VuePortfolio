<template>
	<nav class="navbar">
	  <!-- <a href="/"><img class="logo" src="https://i.postimg.cc/6QS6sKHJ/download.png" alt="logo"></a>
	  <img class="icon" src="https://img.icons8.com/ios-filled/50/null/home-page.png"/><router-link to="/">Home</router-link> |
	  <img class="icon" src="https://img.icons8.com/ios-filled/50/null/guest-male--v1.png"/><router-link to="/about">About Me</router-link> |
	  <img class="icon" src="https://img.icons8.com/ios-filled/50/null/parse-resume.png"/> <router-link to="/Resume">Resume</router-link> |
	  <img class="icon" src="https://img.icons8.com/external-sbts2018-solid-sbts2018/50/null/external-projects-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"/><router-link to="/Projects">Projects</router-link> |
	  <img class="icon" src="https://img.icons8.com/ios-filled/50/null/voice-recognition-scan.png"/><router-link to="/Testimonials">Testimonials</router-link> |
	  <img class="icon" src="https://img.icons8.com/external-itim2101-fill-itim2101/50/null/external-mail-human-resource-itim2101-fill-itim2101.png"/><router-link to="/Contact">Contact Me</router-link>   -->
	  <NavBar/>
  </nav>
  <router-view/>
  <Footer/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default{
	components:{
		NavBar,
		Footer,
		
	}
	
};


</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'); 

#app {
	font-family: 'Bakbak One', cursive;
  text-align: center;
  color:lightblue ;
  text-shadow: black 1px 1px 1px;
	height: 50vw;
	width: 100%;
	background-image: linear-gradient(-0225deg,#B0CE31 10%,#31B0CE 30%,#CE31B0 65%);
	/* background-image:url(https://i.postimg.cc/DZM399B8/4a96e602750b8ef669a77565becf3939.gif); */
	background-repeat: no-repeat;
	background-size:cover;
	background-size: 100%;
	
	bottom: 1100px;
	min-height: 120vh;
	background-size: 100vw;
	
	
	

}





</style>
