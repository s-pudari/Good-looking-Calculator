let currentDisplay='';
    document.querySelector("#display").value=currentDisplay;
    alert("Hello this is Shivakumar,glad to have you on my page 🤗")

    function togglePlaceholder() {
    let inputField = document.getElementById("display");
    let placeholder = document.getElementById("floating-placeholder");

    if (inputField.value.trim() !== "") {
        placeholder.style.display = "none"; // Hide when text is entered
    } else {
        placeholder.style.display = "block"; // Show when input is empty
    }
}

// Attach `togglePlaceholder()` to all buttons
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        setTimeout(togglePlaceholder, 10); // Ensures display updates first
    });
});

function removeLastChar() {
    currentDisplay = currentDisplay.toString().slice(0, -1); // Convert to string before slicing
    document.querySelector("#display").value = currentDisplay;
}
