const phoneInputField = document.querySelector("#mobile");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


  function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("mobile").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) ) {
      text = "Input not valid";
    } else{
        text = "";
    }
    document.getElementById("demo").innerHTML = text;
  }

  document.getElementById("send").addEventListener("click", function () {
	var phoneNumber = document.getElementById("mobile").value;
	var email = document.getElementById("email").value;
	var confirmEmail = document.getElementById("email2").value;
	var gender = document.querySelector('input[name="gender"]:checked');

	if (!phoneNumber.match(/[0-9]{10}/)) {
		alert("Please enter a valid phone number with 10 digits.");
	} else if (email !== confirmEmail) {
		alert("Emails do not match.");
	} else {
		// All inputs are correct, redirect to payment.html
		window.location.href = "payment.html";
	}
});

  /* const submitButton = document.getElementById("send");

        submitButton.addEventListener("click", () => {
           const form = document.getElementById("form2");
            const inputs = form.querySelectorAll("input[type='text']");

            let isEmpty = false;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isEmpty = true;
                    input.classList.add("empty-field");
                } else {
                    input.classList.remove("empty-field");
                }
            });

            if (isEmpty) {
                alert("Please fill in all required fields.");

            }
        );  */
   








  //disabling the submit button with id send on empty input fields
document.getElementById("send").disabled = true;
document.getElementById("name").addEventListener("keyup", function () {
    var name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("send").disabled = true;
    } else {
        document.getElementById("send").disabled = false;
    }
});
document.getElementById("mobile").addEventListener("keyup", function () {
    var mobile = document.getElementById("mobile").value;
    if (mobile == "") {
        document.getElementById("send").disabled = true;
    } else {
        document.getElementById("send").disabled = false;
    }
});
document.getElementById("email").addEventListener("keyup", function () {
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("send").disabled = true;
    } else {
        document.getElementById("send").disabled = false;
    }
});
document.getElementById("email2").addEventListener("keyup", function () {
    var email2 = document.getElementById("email2").value;
    if (email2 == "") {
        document.getElementById("send").disabled = true;
    } else {
        document.getElementById("send").disabled = false;
    }
});


//storing all inputs in local storage on click of the submigt button of id send
document.getElementById("send").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email2").value;
    var gender = document.getElementById("gender").value;
    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("email2", email2);
    localStorage.setItem("gender", gender);
} );

//preventing refreshing of the page on click of the submit button
document.getElementById("send").addEventListener("click", function (event) {
    event.preventDefault();
}
);




window.addEventListener('load',function(){
	
	 const Date=localStorage.getItem('Date');
	 document.getElementById('Date').innerHTML=Date;
	 
	 const Time1=localStorage.getItem('Time1');
	 document.getElementById('Time1').innerHTML=Time1;
	 
	 const Time2=localStorage.getItem('Time2');
	 document.getElementById('Time2').innerHTML=Time2;
	 
	 const timeDuration=localStorage.getItem('timeDuration');
	 document.getElementById('timeDuration').innerHTML=timeDuration;
	 
	 const totPayable=localStorage.getItem('totPayable');
	 document.getElementById('totPayable').innerHTML=totPayable;
	 
	 const slArowC=localStorage.getItem('slArowC');
	 document.getElementById('slArowC').innerHTML=slArowC;
	 
	 const slArow=localStorage.getItem('slArow');
	 document.getElementById('slArow').innerHTML=slArow;
	 
	 const slCrowC=localStorage.getItem('slCrowC');
	 document.getElementById('slCrowC').innerHTML=slCrowC;
	 
	 const slCrow=localStorage.getItem('slCrow');
	 document.getElementById('slCrow').innerHTML=slCrow;
	 
	 	 const frArowC=localStorage.getItem('frArowC');
	 document.getElementById('frArowC').innerHTML=frArowC;
	 
	 const frArow=localStorage.getItem('frArow');
	 document.getElementById('frArow').innerHTML=frArow;
	 
	 	 const frCrowC=localStorage.getItem('frCrowC');
	 document.getElementById('frCrowC').innerHTML=frCrowC;
	 
	 const frCrow=localStorage.getItem('frCrow');
	 document.getElementById('frCrow').innerHTML=frCrow;
	 
	 	 const infrowC=localStorage.getItem('infrowC');
	 document.getElementById('infrowC').innerHTML=infrowC;
	 
	 const infrow=localStorage.getItem('infrow');
	 document.getElementById('infrow').innerHTML=infrow;
	 
 
	
	
});

function handleSubmit2(){
	
	const Date = document.getElementById('Date').innerHTML;
	const Time1 = document.getElementById('Time1').innerHTML;
	const Time2 = document.getElementById('Time2').innerHTML;
	const timeDuration = document.getElementById('timeDuration').innerHTML;
	const totPayable = document.getElementById('totPayable').innerHTML;
	
	const slArowC = document.getElementById('slArowC').innerHTML;
	const slArow = document.getElementById('slArow').innerHTML;
	const slCrowC = document.getElementById('slCrowC').innerHTML;
	const slCrow = document.getElementById('slCrow').innerHTML;
	const frArowC = document.getElementById('frArowC').innerHTML;
	const frArow = document.getElementById('frArow').innerHTML;
	const frCrowC = document.getElementById('frCrowC').innerHTML;
	const frCrow = document.getElementById('frCrow').innerHTML;
	const infrowC = document.getElementById('infrowC').innerHTML;
	const infrow = document.getElementById('infrow').innerHTML;

	localStorage.setItem("Date",Date);
	localStorage.setItem("Time1",Time1);
	localStorage.setItem("Time2",Time2);
	localStorage.setItem("timeDuration",timeDuration);
	localStorage.setItem("totPayable",totPayable);
	
	localStorage.setItem("slArowC",slArowC);
	localStorage.setItem("slArow",slArow);
	localStorage.setItem("slCrowC",slCrowC);
	localStorage.setItem("slCrow",slCrow);
	localStorage.setItem("frArowC",frArowC);
	localStorage.setItem("frArow",frArow);
	localStorage.setItem("frCrowC",frCrowC);
	localStorage.setItem("frCrow",frCrow);
	localStorage.setItem("infrowC",infrowC);
	localStorage.setItem("infrow",infrow);
 

	return;
}


 
	 