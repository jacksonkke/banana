// storage.js

function formatDateTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function saveSelectionToStorage(day, hour, minute) {
    const date = new Date();
    const timestamp = formatDateTime(date); // Use the formatDateTime function to format the timestamp
    const selection = `${day} day: ${hour} h: ${minute} min`;
    const entry = { timestamp, selection };

    let history = JSON.parse(localStorage.getItem('timeSelectionHistory')) || [];
    history.push(entry);

    console.log("Updated history:", history); // Debugging to check the history array

    localStorage.setItem('timeSelectionHistory', JSON.stringify(history));
}

function loadSelectionHistory() {
    const history = JSON.parse(localStorage.getItem('timeSelectionHistory')) || [];
    const container = document.getElementById("historyContainer");

    // Clear the container first to avoid duplication
    container.innerHTML = '';

    history.forEach((entry, index) => {
        // Create a new block for each entry
        const block = document.createElement("div");
        block.classList.add("history-block");

        // Create a label element as a "file tab"
        const label = document.createElement("div");
        label.classList.add("history-label");
        label.textContent = `Costomer ${index + 1}`; // Label as "Selection 1", "Selection 2", etc.

        // Create and style elements for the selection result and timestamp
        const timestampText = document.createElement("p");
        timestampText.textContent = `${entry.timestamp}`;
        timestampText.classList.add("timestamp-text");

        const selectionText = document.createElement("p");
        selectionText.textContent = `${entry.selection}`;
        selectionText.classList.add("selection-text");


        // Append label and other elements to the block
        block.appendChild(label);
        block.appendChild(timestampText);
        block.appendChild(selectionText);
       

        // Add the block to the container
        container.appendChild(block);
    });
}

const date = new Date();
const formattedDateTime = date.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log(formattedDateTime);
