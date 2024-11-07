
//for clearing data
//localStorage.removeItem('timeSelectionHistory');



function showSelectedTime() {
    var day = document.getElementById("day").value;
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;

    var dayValue = parseInt(day) || 0;
    var hourValue = parseInt(hour) || 0;
    var minuteValue = parseInt(minute) || 0;

    // Display the selected time in the format "X days, Y hours, Z minutes"
    document.getElementById("selectedTime").innerText = `${dayValue}d : ${hourValue}h : ${minuteValue}min `;
}

function saveSelectionToStorage(day, hour, minute) {
    const timestamp = new Date().toISOString();
    const selection = `${day} days, ${hour} hours, ${minute} minutes`;
    const entry = { timestamp, selection };

    let history = JSON.parse(localStorage.getItem('timeSelectionHistory')) || [];
    history.push(entry);

    console.log("Updated history:", history); // Debugging to check the history array

    localStorage.setItem('timeSelectionHistory', JSON.stringify(history));
}

document.getElementById('myButton').addEventListener('click', function() {
    var day = document.getElementById("day").value || 0;
    var hour = document.getElementById("hour").value || 0;
    var minute = document.getElementById("minute").value || 0;

   // Store selection in local storage
   saveSelectionToStorage(day, hour, minute);
    
    // Pass the selected day, hour, and minute values as URL parameters to Page 2
    window.location.href = `page2.html?day=${day}&hour=${hour}&minute=${minute}`;
});



