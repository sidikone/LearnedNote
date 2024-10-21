// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, dateOptions);

    const timeString = now.toLocaleTimeString();
    document.getElementById('digitalClock').textContent = timeString;
}

updateDateTime(); // Run the function once when the page loads
// Initialize the date and time on page load and update every second
setInterval(updateDateTime, 1000);

// Function to load and insert table HTML files
function loadTable(divId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading table:", error);
        });
}

// Load tables into sections
window.onload = function() {
    loadTable('table1', 'table1.html');  // Load table1.html into #table1 div
    loadTable('table2', 'table2.html');  // Load table2.html into #table2 div
};