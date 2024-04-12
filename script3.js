document.addEventListener('DOMContentLoaded', function() {
    // Maintain a list of registered users (with username, email, and password)
    var registeredUsers = [
        { username: 'aklilu', email: 'aklilu@gmail.com', password: 'ak47' },
        { username: 'beyero', email: 'beyero@gmail.com', password: 'beyero' },
        { username: 'tesfaye', email: 'tesfaye@gmail.com', password: 'tesfaye' }
    ]; // Replace with actual data from your database
    
    // Event listener for the "Register" button
    document.getElementById('register').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the button
        
        // Hide the login form
        document.getElementById('login-form').style.display = 'none';
        // Display the registration form
        document.getElementById('reg-form').style.display = 'block';
        // Reset the registration form
        document.getElementById('reg-form').reset();
    });

    // Event listener for the registration form submission
    document.getElementById('reg-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default action of the form
        
        // Get the values from the registration form fields
        var username = document.getElementById('reg-username').value;
        var email = document.getElementById('reg-email').value;
        var password = document.getElementById('reg-password').value;
        
        // Check if the username or email is already registered
        if (registeredUsers.some(user => user.username === username || user.email === email)) {
            alert('User already registered! Please log in or use the "Forgot Password" option.');
        } else {
            // Add the new user to the registeredUsers array
            registeredUsers.push({ username: username, email: email, password: password });
            // Perform any additional registration process here
            
            // Display success message
            displaySuccessMessage();
            // Reset the registration form
            document.getElementById('reg-form').reset();
            // Hide the registration form
            document.getElementById('reg-form').style.display = 'none';
            // Display the success message
            document.getElementById('success-message').style.display = 'block';
        }
    });

    // Event listener for the login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get the values from the login form fields
        var username = document.getElementById('user-name').value;
        var password = document.getElementById('user-password').value;
        
        // Check if the entered credentials match any registered user
        var user = registeredUsers.find(user => (user.username === username || user.email === username) && user.password === password);
        
        if (user) {
            // Successful login
            document.getElementById('secured').style.display = 'block'; // Display secured content
            document.getElementById('login-form').style.display = 'none'; // Hide login form
            document.getElementById('container').style.display = 'none'; // Hide container
        } else {
            // Failed login
            alert('Invalid username/email or password. Please try again.');
        }
    });

    // Event listener for the "Forgot Password?" button
    document.getElementById('forgot-password').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the button
        
        // Here you can implement your logic for password recovery,
        // such as sending a password reset link to the user's email.
        // You can display a form for the user to input their email address
        // or trigger a process where the user receives instructions via email.
        // This implementation depends on your specific requirements.
        // For example:
        // showPasswordRecoveryForm();
    });

    // Event listener for the close icon in the success message
    document.getElementById('close-icon').addEventListener('click', function() {
        document.getElementById('success-message').style.display = 'none'; // Hide success message
        document.getElementById('login-form').style.display = 'block'; // Display login form again
    });

    // Function to display the success message
    function displaySuccessMessage() {
        document.getElementById('success-message').style.display = 'block';
        //document.getElementById('container').style.display = 'none'; // Hide container
    }
});
