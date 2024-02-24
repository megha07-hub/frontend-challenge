<section class="h-full w-full flex flex-col items-center justify-center gap-10">
	<h1 class="text-4xl font-bold max-w-4xl px-8">
		Sign up for our news letter
	</h1>
	<p class="max-w-4xl px-8 text-center">
		Stay upto date with the roadmap progress, announancements and exclusive
		<br />
		discount feel free to signup with your email
		<br/>
	</p>
</section>


<style>
	.primary-button {
	  padding: 10px 20px;
	  background-color: #007bff;
	  color: white;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	}
  
	.primary-button:hover {
	  background-color: #0056b3;
	}
  </style>





<script lang="ts">



	 let email :string = '';
	 let validEmail : boolean = false;
  
	// function handleChange(request:Request) {
	//   //email = event.target.value;
	//   validateEmail(request);
	// }
  
	  async function handleSubmit(event:any) {
	

		const response = await fetch('/api/post', {
       method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: `${email}` }),
    });

	const responseData = await response.json();
	console.log(responseData);
	


	//   if (validEmail) {
	// 	alert(`Email ${email} is valid!`);
	//   } else {
	// 	alert('Please enter a valid email address.');
	//   }
	}
  
	//  function validateEmail():boolean {
	//   // Regular expression for basic email validation
	//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	//   return emailPattern.test(email);
	  
	// }
  </script>



<div>
	<form on:submit={handleSubmit}>
	  <label for="emailInput">Enter your email:</label>
	  <input
		type="email"
		id="emailInput"
		placeholder="example@example.com"
		bind:value={email}
	  />
	  <button type="submit" class="primary-button">Submit</button>
	  <p>We care about the protection of your data. Read our Privacy Policy</p>
	</form>
  </div>
