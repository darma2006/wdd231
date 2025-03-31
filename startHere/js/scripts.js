document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const newsletter = document.getElementById("newsletter").checked ? "Yes" : "No";
    const comments = document.getElementById("comments").value;

    // Store the form data in localStorage
    localStorage.setItem("user-name", name);
    localStorage.setItem("user-email", email);
    localStorage.setItem("user-age", age);
    localStorage.setItem("user-newsletter", newsletter);
    localStorage.setItem("user-comments", comments);

    // Redirect to the thanks page
    window.location.href = "thanks.html";
});
