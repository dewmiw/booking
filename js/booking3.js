const submitButton = document.getElementById("payment");

        submitButton.addEventListener("click", () => {
            const cardNumber = document.getElementById("card").value;
            const expiryDate = document.getElementById("expiry").value;
            const cvv = document.getElementById("cvv").value;
            const nameOnCard = document.getElementById("cardHolder").value;

            const maxCardNumberLength = 16;
            const maxCVVLength = 3;

            let isValid = true;

            // Card Number validation
            if (cardNumber.length < maxCardNumberLength) {
                alert("Card Number: Incomplete Field");
                isValid = false;
            }
            // Expiry Date validation (Assuming format: MM/YY)
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; // Add 1 because getMonth() returns 0-11
            const currentYear = currentDate.getFullYear() % 100; // Last two digits of the current year

            const expiryParts = expiryDate.split('/');
            const expiryMonth = parseInt(expiryParts[0]);
            const expiryYear = parseInt(expiryParts[1]);

            if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                alert("Card is Expired");
                isValid = false;
            }

            // CVV validation
            if (cvv.length < maxCVVLength) {
                alert("CVV: Incomplete Field");
                isValid = false;
            }
            // Name on Card validation
            const namePattern = /^[a-zA-Z ]+$/;
            if (!namePattern.test(nameOnCard)) {
                alert("Invalid Characters in Name on Card");
                isValid = false;
            }

            if (isValid) {
                alert("Card Information Valid!");
                // You can add further actions here for a successful submission.
            }

            //disabling the button with id payment if isValid is false
            if (isValid == false) {
                document.getElementById("payment").disabled = true;
            }
        });

    

        



/*
//validating card number
function validateCard() {
    var card = document.getElementById("card").value;
    var cardError = document.getElementById("cardError");
    var cardPattern = /^[0-9]{16}$/;
    if (card == "") {
        cardError.innerHTML = "Card number is required";
        cardError.style.color = "red";
        return false;
        alert("Card number is required");
    } else if (!card.match(cardPattern)) {
        cardError.innerHTML = "Card number must be 16 digits only";
        cardError.style.color = "red";
        return false;
        alert("Card number must be 16 digits only");
    } else {
        cardError.innerHTML = "";
        return true;
    }
}
//validate expiry date
function validateExpiry() {
    var expiry = document.getElementById("expiry").value;
    var expiryError = document.getElementById("expiryError");
    var expiryPattern = /^[0-9]{4}$/;
    if (expiry == "") {
        expiryError.innerHTML = "Expiry date is required";
        expiryError.style.color = "red";
        return false;
        alert("Expiry date is required");
    } else if (!expiry.match(expiryPattern)) {
        expiryError.innerHTML = "Expiry date must be 4 digits only";
        expiryError.style.color = "red";
        return false;
        alert("Expiry date must be 4 digits only");
    } else {
        expiryError.innerHTML = "";
        return true;
    }
}
//validate cvv
function validateCvv() {
    var cvv = document.getElementById("cvv").value;
    var cvvError = document.getElementById("cvvError");
    var cvvPattern = /^[0-9]{3}$/;
    if (cvv == "") {
        cvvError.innerHTML = "CVV is required";
        cvvError.style.color = "red";
        return false;
        alert("CVV is required");
    } else if (!cvv.match(cvvPattern)) {
        cvvError.innerHTML = "CVV must be 3 digits only";
        cvvError.style.color = "red";
        return false;
        alert("CVV must be 3 digits only");
    } else {
        cvvError.innerHTML = "";
        return true;
    }
}
//validate card holder name
function validateCardHolder() {
    var cardHolder = document.getElementById("cardHolder").value;
    var cardHolderError = document.getElementById("cardHolderError");
    var cardHolderPattern = /^[a-zA-Z]+$/;
    if (cardHolder == "") {
        cardHolderError.innerHTML = "Card holder name is required";
        cardHolderError.style.color = "red";
        return false;
        alert("Card holder name is required");
    } else if (!cardHolder.match(cardHolderPattern)) {
        cardHolderError.innerHTML = "Card holder name must be alphabets only";
        cardHolderError.style.color = "red";
        return false;
        alert("Card holder name must be alphabets only");
    } else {
        cardHolderError.innerHTML = "";
        return true;
    }
}
//enable button with id payment if all fields are valid and checked
function enableButton() {
    if (validateCard() && validateExpiry() && validateCvv() && validateCardHolder()) {
        document.getElementById("payment").disabled = false;
    }
}
//disable button with id payment if any field is invalid or unchecked
function disableButton() {
    document.getElementById("payment").disabled = true;
}
//storing all inputs in local storage on click of button with id payment
document.getElementById("payment").addEventListener("click",function () {
    var card = document.getElementById("card").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
    var cardHolder = document.getElementById("cardHolder").value;
    localStorage.setItem("card", card);
    localStorage.setItem("expiry", expiry);
    localStorage.setItem("cvv", cvv);
    localStorage.setItem("cardHolder", cardHolder);
});
//alert user on click of button with id payment
function alertUser() {
    alert("Your booking is confirmed");
}
*/

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

