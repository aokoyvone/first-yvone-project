function addFeedback() {
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    // Create a new row
    const table = document.getElementById("feedbackTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.classList.add("feedbackRow");

    // Checkbox cell
    const checkboxCell = newRow.insertCell(0);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("rowCheckbox");
    checkboxCell.appendChild(checkbox);

    // Name cell
    newRow.insertCell(1).innerText = name;

    // Email cell
    newRow.insertCell(2).innerText = email;

    // Feedback cell
    newRow.insertCell(3).innerText = feedback;

    // Clear form
    document.getElementById("feedbackForm").reset();
}

function toggleAll(source) {
    const checkboxes = document.querySelectorAll(".rowCheckbox");
    checkboxes.forEach(checkbox => {
        checkbox.checked = source.checked;
    });
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll(".rowCheckbox:checked");
    checkboxes.forEach(checkbox => {
        checkbox.closest("tr").remove();
    });
}
