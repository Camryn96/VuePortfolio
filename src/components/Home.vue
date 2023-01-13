<template>
	<div class="Home">
		<div class="avatar">
  <img src="https://i.postimg.cc/MG8QkzV3/profile-1.jpg">
</div>




			 <div class="words word-1">
  <span>C</span>
  <span>A</span>
  <span>M</span>
  <span>R</span>
  <span>Y</span>
  <span>N</span>
  
</div>

<div class="words word-2">
	<span>B</span>
  <span>R</span>
  <span>A</span>
  <span>N</span>
  <span>D</span>
  <span>O</span>
  <span>N</span>
</div>

<div class="words word-3">
<span>H</span>
  <span>E</span>
  <span>R</span>
  <span>A</span>
  <span>N</span>
  <span>D</span>
  <span>I</span>
  <span>E</span>
  <span>N</span>
  
</div>
			</div>
	


	
</template>
<script>
export default{
	name:'Home'
};


</script>
<style>
.Home{
	font-family: 'Bakbak One', cursive;
	text-shadow: black 5px 4px 2px;
	margin-top: 50px;
}

.profile{
	width: 350PX;
	height: 250PX;
	box-shadow:  black 10px 10px 100px;
	border-radius: 100%
	
};


body {
  font-family: "Archivo Black", sans-serif;
  background: #f4d03f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.words {
  color: black;
  font-size: 50px;
  line-height: 1.5;
  text-shadow: aqua 10px 10px 10px;
  
}

.words span {
  font-size: 5rem;
  display: inline-block;
  animation: move 3s ease-in-out infinite;
}

@keyframes move {
  0% {
    transform: translate(-30%, 0);
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(30%, 0);
  }
}

.words span:nth-child(2) {
  animation-delay: 0.5s;
}

.words span:nth-child(3) {
  animation-delay: 1s;
}

.words span:nth-child(4) {
  animation-delay: 1.5s;
}

.words span:nth-child(5) {
  animation-delay: 2s;
}

.words span:nth-child(6) {
  animation-delay: 2.5s;
}

.words span:nth-child(7) {
  animation-delay: 3s;
};



body {
  align-items: center;
  background: #222;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
}

html {
  height: 100%;
}

.avatar {
  height: 200px;
  position: relative;
  width: 200px;
  margin-left: 40rem;
  
}

.avatar img {
  border-radius: 9999px;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 2;
  
}

@keyframes cycle-colors {
  0% { border-color: hsl(67, 100%, 50%); }
  25% { border-color: hsl(190, 100%, 50%); }
  50% { border-color: hsl(180, 100%, 50%); }
  75% { border-color: hsl(0, 100%, 50%); }
  100% { border-color: rgb(0, 0, 0); }
}

@keyframes pulse {
  to {
    opacity: 0;
    transform: scale(1);
  }
}

.avatar::before,
.avatar::after {
  animation: pulse 2s linear infinite;
  border: #fff solid 8px;
  border-radius: 9999px;
  box-sizing: border-box;
  content: ' ';
  height: 140%;
  left: -20%;
  opacity: .6;
  position: absolute;
  top: -20%;
  transform: scale(0.714);
  width: 140%;
  z-index: 1;
}

.avatar::after {
  animation-delay: 1s;
}

.avatar:hover img {
  content: url('https://i.postimg.cc/xCXJMq2C/1667595481829.jpg');
  display: block;
  margin-left: auto;
  margin-right: auto;
  
width: 155px;
height: 175px;


}

.avatar:hover::before,
.avatar:hover::after {
  animation: pulse 1s linear infinite, cycle-colors 6s linear infinite;
}

.avatar:hover::after {
  animation-delay: .5s;
}







</style>