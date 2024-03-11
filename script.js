document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login logic here
    // You can use JavaScript to handle the form submission and login process
  });
  
  // Example of navigating to another page on button click
  document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "next_page.html";
  });
  