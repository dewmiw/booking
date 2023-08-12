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
    const timeSlot1 = document.getElementById('timeSlot1')
    const time1 = timeSlot1.value   
    document.getElementById('Time1').innerHTML = time1
    console.log(time1)
})


//Ending timeslot
document.getElementById('timeSlot2').addEventListener('change', function () {
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





