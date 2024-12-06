// Simulate user login status
let isUserSignedIn = false; // Change to true if the user is signed in

// Map categories to URLs or routes
const categoryRoutes = {
    "it-course": "/categories/it-course",
    "web-development": "/categories/web-development",
    "software-engineer": "/categories/software-engineer",
    "database": "/categories/database",
};

// Function to handle search and redirection
document.getElementById("searchButton").addEventListener("click", function () {
    const selectedCategory = document.getElementById("dropdown").value;

    if (!isUserSignedIn) {
        alert("Please login to continue!");
        // Redirect to login/signup page
        window.location.href = "./signup.html";
        return;
    }

    // Redirect to the selected category's page
    if (categoryRoutes[selectedCategory]) {
        window.location.href = categoryRoutes[selectedCategory];
    } else {
        alert("Invalid category selected!");
    }
});

// Optional: Mock login/logout toggle for testing
document.getElementById("loginButton").addEventListener("click", function () {
    isUserSignedIn = true; // Simulate user logging in
    alert("User logged in! Now you can search.");
});
