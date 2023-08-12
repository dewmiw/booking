//responsiveness - dropdown menu

 


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars'
}

//datepicker

document.getElementById('my-date-picker').addEventListener('change', function () {
	document.querySelector('.mySelection').setAttribute('style','display: none;');
	document.querySelector('.mySelection2').setAttribute('style','display: none;');
    const datepicker = document.getElementById('my-date-picker')
    const date = datepicker.value
    document.getElementById('Date').innerHTML = date
    console.log(date)
})

//getting from local storage
const date = localStorage.getItem('date')
if (date) {
    datepicker.value = date
}
//changing the value of table cell of id Date according to the date
const dateCell = document.querySelector('#Date')
dateCell.innerHTML = datepicker.value


//Starting timeslot
document.getElementById('timeSlot1').addEventListener('change', function () {
	document.querySelector('.mySelection').setAttribute('style','display: none;');
		document.querySelector('.mySelection2').setAttribute('style','display: none;');
    const timeSlot1 = document.getElementById('timeSlot1')
    const time1 = timeSlot1.value   
    document.getElementById('Time1').innerHTML = time1
    console.log(time1)
})


//Ending timeslot
document.getElementById('timeSlot2').addEventListener('change', function () {
	document.querySelector('.mySelection').setAttribute('style','display: none;');
		document.querySelector('.mySelection2').setAttribute('style','display: none;');
    const timeSlot2 = document.getElementById('timeSlot2')
    const time2 = timeSlot2.value
    document.getElementById('Time2').innerHTML = time2
    console.log(time2)
}
)

//storing inputs in local storage on change of input
document.getElementById("my-date-picker").addEventListener("change", function () {
    var date = document.getElementById("my-date-picker").value;
    localStorage.setItem("date", date);
}
);
document.getElementById("timeSlot1").addEventListener("change", function () {
    var time1 = document.getElementById("timeSlot1").value;
    localStorage.setItem("time1", time1);
}
);
document.getElementById("timeSlot2").addEventListener("change", function () {
    var time2 = document.getElementById("timeSlot2").value;
    localStorage.setItem("time2", time2);
}
);



// newly added code


var normTime=0;
var peTime=0;
var durationGlobe=0;

 


//calculating the price

function calcPrice() {
	
	var duration=0;
	const timeSlot1 = document.getElementById('timeSlot1')
    const time1 = timeSlot1.value
	
	const timeSlot2 = document.getElementById('timeSlot2')
    const time2 = timeSlot2.value

	var startTime=0;
	var endTime=0;
	
	if (time1 == "07:00 AM to 08:00 AM"){startTime=7; }
	else if (time1 == "08:00 AM to 09:00 AM"){startTime=8; }
	else if (time1 == "09:00 AM to 10:00 AM"){startTime=9; }
	else if (time1 == "10:00 AM to 11:00 AM (peak hour)"){startTime=10; }
	else if (time1 == "11:00 AM to 12:00 PM (peak hour)"){startTime=11; }
	else if (time1 == "12:00 PM to 1:00 PM (peak hour)"){startTime=12; }
	else if (time1 == "1:00 PM to 2:00 PM"){startTime=13; }
	else if (time1 == "2:00 PM to 3:00 PM"){startTime=14; }
	else if (time1 == "3:00 PM to 4:00 PM (peak hour)"){startTime=15; }
	else if (time1 == "4:00 PM to 5:00 PM (peak hour)"){startTime=16; }
	else if (time1 == "5:00 PM to 6:00 PM (peak hour)"){startTime=17; }
	
	
	if (time2 == "07:00 AM to 08:00 AM"){endTime=7; }
	else if (time2 == "08:00 AM to 09:00 AM"){endTime=8; }
	else if (time2 == "09:00 AM to 10:00 AM"){endTime=9; }
	else if (time2 == "10:00 AM to 11:00 AM (peak hour)"){endTime=10; }
	else if (time2 == "11:00 AM to 12:00 PM (peak hour)"){endTime=11; }
	else if (time2 == "12:00 PM to 1:00 PM (peak hour)"){endTime=12; }
	else if (time2 == "1:00 PM to 2:00 PM"){endTime=13; }
	else if (time2 == "2:00 PM to 3:00 PM"){endTime=14; }
	else if (time2 == "3:00 PM to 4:00 PM (peak hour)"){endTime=15; }
	else if (time2 == "4:00 PM to 5:00 PM (peak hour)"){endTime=16; }
	else if (time2 == "5:00 PM to 6:00 PM (peak hour)"){endTime=17; }	
	
	
	duration=endTime-startTime;
	var peakInfo=0;
	
	if(duration<=0){
		document.querySelector('.mySelection2').setAttribute('style','display: block;');
		document.querySelector('.mySelection').setAttribute('style','display: none;');
		
	}
	
	else if((startTime<=10) && (endTime>10 && endTime<=13)){peakInfo=endTime-10; }
	else if((startTime<=10) && (endTime>=13 && endTime<=15)){peakInfo=3; }
	else if((startTime<=10) && (endTime>=15 && endTime<=18)){peakInfo=3+(endTime-15); }
	
	else if((startTime>=10 && startTime<=13 ) && (endTime<=13)){peakInfo=endTime-10; }
	else if((startTime>=10 && startTime<=13) && (endTime>13 && endTime<=15)){peakInfo=13-startTime; }
	else if((startTime>=10 && startTime<=13) && (endTime>=15 && endTime<=18)){peakInfo=(13-startTime)+(endTime-15); }
	
	else if((startTime>=13 && startTime<=15) && (endTime>=13 && endTime<=15)){peakInfo=0; }
	else if((startTime>=13 && startTime<=15) && (endTime>=15 && endTime<=18)){peakInfo=endTime-15; }
	
	else if((startTime>=15 && startTime<=18) && (endTime>=15 && endTime<=18)){peakInfo=endTime-startTime; }
	
 
	if(duration<=0){
	document.getElementById('timeDuration').innerHTML = "Invalid Time Slots Selection";
    console.log("Invalid Time Slots Selection")}
	else{
		normTime=duration-peakInfo;
		peTime=peakInfo;
		durationGlobe=duration;
	document.getElementById('timeDuration').innerHTML = duration+" hrs ("+(duration-peakInfo)+" Normal : "+ peakInfo+" Peak)";
    console.log(duration+" hrs ("+(duration-peakInfo)+" Normal : "+ peakInfo+" Peak)")}
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	const myDatePicker = document.getElementById('my-date-picker');
	const myDatePickerT = myDatePicker.value;
	
	 
	
	const slAdultCount = document.getElementById('slAdultCount');
    const slAdult = slAdultCount.innerText;
	
	const slChildCount = document.getElementById('slChildCount');
    const slChild  = slChildCount.innerText;
	
	const frAdultCount = document.getElementById('frAdultCount');
    const frAdult  = frAdultCount.innerText;
	
	const frChildCount = document.getElementById('frChildCount');
    const frChild = frChildCount.innerText;
	
	const infCount = document.getElementById('infCount');
    const infC = infCount.innerText;
	
	var totPrice=0;
	
	if(slAdult<0 || slChild<0 || frAdult<0 || frChild<0 || infC<0 || myDatePickerT=="" ||  duration<=0 || (slAdult<=0 && slChild<=0 && frAdult<=0 && frChild<=0 && infC<=0) ){
		
		 
		document.querySelector('.mySelection2').setAttribute('style','display: block;');
		document.querySelector('.mySelection').setAttribute('style','display: none;');
		}
	else{
		document.getElementById('slArow').innerHTML = (slAdult*4*normTime)+(slAdult*6*peTime);
		document.getElementById('slCrow').innerHTML = (slChild*2*normTime)+(slChild*3*peTime);
		document.getElementById('frArow').innerHTML = (frAdult*10*normTime)+(frAdult*13*peTime);
		document.getElementById('frCrow').innerHTML = (frChild*5*normTime)+(frChild*8*peTime);
		document.getElementById('infrow').innerHTML = infC*0;
		
		document.getElementById('slArowC').innerHTML = slAdult;
		document.getElementById('slCrowC').innerHTML = slChild;
		document.getElementById('frArowC').innerHTML = frAdult;
		document.getElementById('frCrowC').innerHTML = frChild;
		document.getElementById('infrowC').innerHTML = infC;
		
		totPrice=(slAdult*4*normTime)+(slAdult*6*peTime)+(slChild*2*normTime)+(slChild*3*peTime)+(frAdult*10*normTime)+(frAdult*13*peTime)+(frChild*5*normTime)+(frChild*8*peTime)+(infC*0);
		
		
		document.getElementById('totPayable').innerHTML = totPrice+ " USD";
		
		
		document.querySelector('.mySelection').setAttribute('style','display: block;');
		document.querySelector('.mySelection2').setAttribute('style','display: none;');
		
		
		
	}
	
	
}

function handleSubmit(){
	
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



 





