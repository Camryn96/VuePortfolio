<template>
	
	
	<div class="Testimonials">
		<div class="card" v-for="test in tests" :key="test">
  <img class="profilePic" :src="test.image" alt="Avatar" style="width:60px">
  <div class="container">
    <h4 v-text="test.name"></h4>
    <p v-text="test.relation"></p>
    <p v-text="test.message"></p>
  </div>
</div>
			</div>
			
	
</template>
<script>
export default{
	name:'Testimonials',
data() {
	return {
		tests: [
			{
				name: "Matthew Thomas",
				relation:"Co-Worker",
				message:"Camryn, is someone I trust to work along on multiple projects as well as individual projects. I have gotten to know him in a Professional Capacity and he is Staunch on his Ethical behaviors and does not compromise on these Values, in his Personal Capacity he is a Friendly person and kind to others as he is a kind natured person.",
				image: "https://i.postimg.cc/c17n3mb2/img-20221104-wa0006.jpg "

			},
			{
				name: "Faeez Miller",
				relation:"Co-Worker",
				message:"Camryn is a hardworking person means that he is committed to the task at hand and never let anything get in his way. Whether it be working on a project, everyone wants someone who can work well and doesn’t give up easily. He will go above and beyond what most people would do in order to complete something successfully.",
				image: "https://i.postimg.cc/wBKq0KtV/33f78851-dc97-4d4d-8b3e-7801158d376a.jpg"
			},
			{
				name: "John-Bruce Noad",
				relation:"Co-Worker",
				message:"I see Camryn as a very mature and responsible individual. He always puts in the effort to make sure he does his best work, and when he senses you stepping out of line yourself, he knows just how to let you know, by subtly hinting at it with some well timed humor. I also know Camryn as a fiercely tenacious person who, despite hardship and difficulty, keeps going all the while wearing an awe inspiring smile on his face. I have no doubt that he will be of great value to any organization that provides him the opportunity, and that he will bring an interesting dynamic to the work place.",
				image: "https://i.postimg.cc/BQrfGTqZ/john-bruce-noad-pofile-picture.jpg"
			},
			{
				name: "Seth Kallis",
				relation:"Co-Worker",
				message:"I see Camryn as a very mature and responsible individual. He always puts in the effort to make sure he does his best work, and when he senses you stepping out of line yourself, he knows just how to let you know, by subtly hinting at it with some well timed humor. I also know Camryn as a fiercely tenacious person who, despite hardship and difficulty, keeps going all the while wearing an awe inspiring smile on his face. I have no doubt that he will be of great value to any organization that provides him the opportunity, and that he will bring an interesting dynamic to the work place.",
				image: "https://i.postimg.cc/B6jG0M16/img-20221105-090125.jpg"
			},
			{
				name: "Joel Mukanya",
				relation:"Lecturer",
				message:"Camryn is a very creative and well-behaved student. He has determination in his eyes and desires to achieve his goal. Most importantly, he works well in a team as well as on his own. I am quite happy with the effort he puts into his work and would recommend him as a developer.",
				image: "https://i.postimg.cc/cLG4pZxn/joel.jpg"
			},
			{
				name: "Wiseman",
				relation:"Co-Worker",
				message:"Camryn is a down to earth individual, ambitious and focused. He enjoys working on his code with his colleagues",
				image: "https://i.postimg.cc/TYtWNH9W/wiseman.jpg"
			},
			


		]
	}
}
};






	

</script>
<style>
.card{
	display: contents;
  /* grid-template-columns: auto auto auto; */
  background-color: lightgrey;
 padding-top: 100px;

 
}

/* On mouse-over, add a deeper shadow */
.card:hover {
	background-color: lightgrey;
}

/* Add some padding inside the card container */
.container {
  padding: 1px;
}
.profilePic{
	border-radius: 9999px;
}
.testimonials{
	background-color: red;
}

</style>