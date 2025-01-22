const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.collapse-button');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed'); // Toggle collapsed state
    sidebar.style.visibility = sidebar.classList.contains('collapsed') ? 'hidden' : 'visible';
});

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable2");
    switching = true;
    dir = "asc"; // Set the sorting direction to ascending by default.

    // Reset all sort indicators in headers.
    const headers = table.getElementsByTagName("TH");
    for (let header of headers) {
        const span = header.querySelector(".sort");
        if (span) {
            span.innerHTML = ""; // Clear any sort symbol.
        }
    }

    // Add the sort indicator to the active header.
    const activeHeader = headers[n];
    const activeSpan = activeHeader.querySelector(".sort") || document.createElement("span");
    activeSpan.classList.add("sort-symbol");
    if (!activeHeader.contains(activeSpan)) {
        activeHeader.appendChild(activeSpan);
    }

    // Perform sorting.
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }

    // Update the sort indicator based on the sorting direction.
    activeSpan.innerHTML = dir === "asc" ? " &#x25B4;" : " &#x25BE;";
}