function updateMessage(theTextBox) {
    let messageElement = document.getElementById(`${theTextBox.name}_message`);
    // Here, replace theTextBox.id with theTextBox.name
    messageElement.innerHTML = theTextBox.value;
    // ... rest of your validation logic
}
