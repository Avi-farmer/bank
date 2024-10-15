let sub = document.getElementById("sub1");
sub.addEventListener('click' , function() {
    if(user == 98765 && pw == 5678){
        location.href = "debit.html"
        document.getElementById(username).value;
        document.getElementById(password).value;
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (username === '98765' && password === '5678') {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
        sub.addEventListener('click' , function() 
        {
            location.href = "debit.html"
        })    
    } else {
        messageDiv.textContent = 'Invalid username or password!';
        messageDiv.style.color = 'red';
    }
});
