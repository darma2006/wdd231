window.onload = function() {
    // Retrieve the form data from localStorage
    const name = localStorage.getItem("user-name");
    const email = localStorage.getItem("user-email");
    const age = localStorage.getItem("user-age");
    const newsletter = localStorage.getItem("user-newsletter");
    const comments = localStorage.getItem("user-comments");

    // Display the form data on the thanks page
    document.getElementById("user-name").textContent = name;
    document.getElementById("user-email").textContent = email;
    document.getElementById("user-age").textContent = age;
    document.getElementById("user-newsletter").textContent = newsletter;
    document.getElementById("user-comments").textContent = comments;

    // Clear the localStorage after displaying the data (optional)
    localStorage.clear();
};
