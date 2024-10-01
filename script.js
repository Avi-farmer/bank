let sub = document.getElementById("submit");
sub.addEventListener('click' , function() {
    if(user == king && pw == 1234){
        location.href = "home.html"
        document.getElementById(username).value;
        document.getElementById(password).value;
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simple validation
    if (username === 'king' && password === '1234') {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
        sub.addEventListener('click' , function() 
        {
            location.href = "home.html"
        })    
    }
    else {
        messageDiv.textContent = 'Invalid username or password!';
        messageDiv.style.color = 'red';
    }
});
