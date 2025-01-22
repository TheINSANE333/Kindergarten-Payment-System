const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.collapse-button');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed'); // Toggle collapsed state
    sidebar.style.visibility = sidebar.classList.contains('collapsed') ? 'hidden' : 'visible';
});

document.getElementById("calendar-btn").addEventListener("click", function () {
    const calendarInput = document.getElementById("calendar");
    calendarInput.style.display = "block"; // Temporarily display the date picker
    calendarInput.focus(); // Focus on the date picker to open it
});

// Update day, month, and year inputs when a date is selected
document.getElementById("calendar").addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = selectedDate.getFullYear();

    document.getElementById("day").value = day;
    document.getElementById("month").value = month;
    document.getElementById("year").value = year;

    this.style.display = "none"; // Hide the date picker again
});
