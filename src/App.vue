<template>
	<nav>
	  <a href="/"><img class="logo" src="https://i.postimg.cc/6QS6sKHJ/download.png" alt="logo"></a>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Me</router-link> |
    <router-link to="/Resume">Resume</router-link> |
    <router-link to="/Projects">Projects</router-link> |
    <router-link to="/Testimonials">Testimonials</router-link> |
    <router-link to="/Contact">Contact Me</router-link>  
  </nav>
  <router-view/>
  <Footer/>
</template>
<script>
import Footer  from '@/components/Footer.vue'
export default{
	components:{
		Footer,
		
	}
};
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'); 

#app {
	font-family: 'Bakbak One', cursive;
  text-align: center;
  color:white ;
	height: 50vw;
	width: 100%;
	/* background-image: linear-gradient(-0225deg,#FF2200 10%,#00FF22 30%,#2200FF 65%); */
	background-image: url(https://i.postimg.cc/MTfyR3yS/modern-gold-background-free-vector.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	

}



nav {
  padding: 30px;
 
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #3BC4A9;
}
.logo{
	width: 5rem;
	height: 5rem;
	float: left;
	border-radius: 100%;
	box-shadow: black 1px 3px 5px;
};

</style>
