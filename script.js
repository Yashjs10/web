// Predefined users
const users = [
    { username: "yash", password: "yash123" },
    { username: "utkarsh", password: "password2" },
    { username: "admin", password: "admin123" }
];

// Form submission handler
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user && user.password === password) {
        
        alert('login successfull');
        window.location.href='first.html';
        // Redirect or perform any other action
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
