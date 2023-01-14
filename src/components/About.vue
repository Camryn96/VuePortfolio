<template>
	<div class="About">
			   <h1 class="display-1 container-fluid text-decoration-underline">A few things about me!</h1>
            
             <center>
                 
             </center>
			 <br>
			 <br>
               <!-- Button trigger modal -->
     <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal1">
         What is Camryn's Strengths?
     </button>
	 <br>
	 <br>
     <!-- Modal -->
     <div class="modal" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="modal1Label">My Strengths?</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             Honestly speaking, I believe my strengths is my Perseverence to complete whatever task is laid before me. Using whatever methods I am allowed to use. Another strength of mine is my observation skills to analyze whatever situation is laid before me.
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary bg-primary bg-opacity-50 text-black" data-bs-dismiss="modal">Awesome</button>
             
           </div>
         </div>
       </div>
     </div>
     <!-- Button trigger modal -->
     <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal2">
         What is Camryn's Weaknesses?
     </button>
	 <br>
	 <br>
     
     <!-- Modal -->
     <div class="modal" id="modal2" tabindex="-1" aria-labelledby="modal2Label" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="modal2Label">Weaknesses?</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
            Orginization is my biggest weakness. At times my workspace can become messy, from outside looking in it might look like I dont know what im doing but in that mess i have created a system that benefits me.
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary bg-primary bg-opacity-50 text-black" data-bs-dismiss="modal">Awesome</button>
           </div>
         </div>
       </div>
     </div>
     <!-- Button trigger modal -->
     <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal3">
         Camryn in five years?
     </button>
	 <br>
	 <br>
     
     <!-- Modal -->
     <div class="modal" id="modal3" tabindex="-1" aria-labelledby="modal3Label" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="modal3Label">Future Plans?</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             In five years i see myself in stable working conditions, enviroment. All im looking for is stability. With that stability I am always willing to put in the required effort and time make sure my employer trusts me.
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary bg-primary bg-opacity-50 text-black" data-bs-dismiss="modal">Awesome</button>
           </div>
         </div>
       </div>
     </div>
     <!-- Button trigger modal -->
     <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal4">
       What are Camryn's interests?
     </button>
	 <br>
	 <br>
     
     <!-- Modal -->
     <div class="modal" id="modal4" tabindex="-1" aria-labelledby="modal4Label" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="modal4Label">What is your interests?</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             I am football supporter and a football coach that coaches an under9 team. football has always been close to the heart. My other interests are Computers specifically coding and the assembly and disaessembly of Computers. these are the things that bring a little bit of happiness in life.
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary bg-primary bg-opacity-50 text-black" data-bs-dismiss="modal">Awesome</button>
           </div>
         </div>
       </div>
     </div>
     <!-- Button trigger modal -->
     <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal5">
       Is Camryn an Asset?
     </button>
	 <br>
	 <br>
     
     <!-- Modal -->
     <div class="modal" id="modal5" tabindex="-1" aria-labelledby="modal5Label" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="modal5Label">Can he adapt to certain working enviroments?</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
            I believe that I am an asset due to my resilience, determination and observational skills I have taught myself in life.
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary bg-primary bg-opacity-50 text-black" data-bs-dismiss="modal">Awesome</button>
             
           </div>
         </div>
       </div>
     </div>
             </div>
			 <img src="https://i.postimg.cc/W190pwhk/capoo-blue-cat.gif" alt="">
			
</template>
<script>
export default{
	name:'About'
}
</script>
<style>
.modal-body{
	background-color: white;
}
.modal-header,.modal-footer{
	background-image: linear-gradient(-0225deg,#FF2200 10%,#00FF22 30%,#2200FF 65%) ;
}
.button{
	margin-left: 100%;
}
</style>