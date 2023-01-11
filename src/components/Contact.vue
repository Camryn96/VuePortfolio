<template>
	<div class="Contact">
		<div class="container">
			<form action="https://formspree.io/f/xdojwaqg" method="POST" target="_blank">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.. &#128100">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..&#128100">

    <label for="rating">Rating</label>
    <select id="rating" name="rating">
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
      <option value="four">4</option>
      <option value="five">5</option>
      <option value="six">6</option>
      <option value="seven">7</option>
      <option value="eight">8</option>
      <option value="nine">9</option>
      <option value="ten">10</option>
      
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Leave a friendly comment &#128512;" style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>

		
		
	</div>
</template>
<script>
export default{
	name:'Contact'
}
</script>
<style>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: transparent;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: YELLOW;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: transparent;
  padding: 20px;
}



</style>