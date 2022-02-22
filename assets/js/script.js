// Date and time 
var myClock = document.getElementById("currentDay").textContent = moment().format('MMMM Do YYYY, h:mm a');

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// for loop 
function colorChanger() {
    const now = moment().format('H');
    for (var i = 0; i < hour.length; i++) {
        if (now > hour[i]) {
            $(`#{hour[i]}`).attr('class', 'col-10 past');
        } else if (now == hour[i]) {
            $(`#{hour[i]}`).attr('class', 'col-10 present');
        }
    }
}



function colorChanger() {
    const now = moment().format('H');
    for (let i = 0; i < times.length; i++) {
        if (now > times[i]) {
            $(`#{times[i]}`).attr('class', 'col-10 past');
        } else if (now == times[i]) {
            $(`#{times[i]}`).attr('class', 'col-10 present');
        }
    }
}


// CHECK hour AND RUN COLORCHANGE EVERY SECOND
$(function () {
    setInterval(colorChanger, 1000);
});

// STORE ALL NOTES
var store = [];
$(".saveBtn").click(function () {
    if (localStorage.getItem("store") !== null) {
        store = JSON.parse(localStorage.getItem('store'));
    }
    var hour = $(this).parent().children()[0].innerHTML;
    var message = $(this).parent().children()[1].value;
    var add = {
        hour: hour,
        message: message
    };
    store.push(add);
    localStorage.setItem("store", JSON.stringify(store));
});

// RETRIEVE ALL NOTES FROM STORAGE
if (localStorage.getItem("store") !== null) {
    var storedData = JSON.parse(localStorage.getItem('store'));
    storedData.forEach(element => {
        var checkhour = element.hour;
        var checkMsg = element.message;
        for (var i = 0; i < hour.length; i++) {
            var checkId = $(`#${hour[i]}`).parent().children()[0].innerHTML;
            if (checkhour == checkId) {
                $(`#${hour[i]}`).parent().children()[1].textContent = checkMsg;
            }
        }
    });
}