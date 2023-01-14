<template>
	
	<div class="Resume">
		<h1>EDUCATION HISTORY:</h1>
		<p>• 2010-2012: Witebomme High School.</p>
		<p>• 2015-2016: College of Cape Town.</p>
		<p>• 2017-2018 : Bible college graduated 2018.</p>
		<p>• 2020-2021 : Matriculated: Bethany Learning Centre.</p>
		<br>
		<h1>WORK HISTORY:</h1>
		<p>• Started my own business as a delivery driver(2020-)</p>
		<p>• Pharmacy Assistant @ Parow Valley Pharmacy.</p>
		<p>• LifeChoices Coding Academy Junior Developer</p>
	</div>
	<br>
	<center>
		<h1>My Skills</h1>
		
	</center>
	
	<p>HTML</p>
	<div class="container">
		<div class="skills html">Intermediate</div>
	</div>
	
	<p>CSS</p>
	<div class="container">
		<div class="skills css">Intermediate</div>
	</div>
	
	<p>JavaScript</p>
	<div class="container">
		<div class="skills js">Novice</div>
	</div>
	
	<a href="https://docs.google.com/document/d/1M3cujK5ESi1rOuip4aGgPsMzyM2EGFSX/edit?usp=share_link&ouid=108568048619233394137&rtpof=true&sd=true" target="_blank"><button class="btn">View Cirriculum Vitae</button></a>
	
</template>

<script>
export default{
	name:'Resume'}
	
</script>
<style>
h1{
	text-align: center;
};

.container {
  width: 100%;
  background-color: #ddd;
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: whitesmoke;
}
.btn{
	margin-right: 100%;
	color: whitesmoke(box-shadow(black 10px 10px 10px));
	background-color: lightskyblue;
	box-shadow: black 2px 2px 2px;
	
}
.btn :hover{
	background-color: blue;
}

.html {width: 90%; background-color: orangered;}
.css {width: 80%; background-color: blue;}
.js {width: 65%; background-color: yellow;}
</style>