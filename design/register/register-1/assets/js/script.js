document.getElementById('registerForm').addEventListener('submit', function(){
    event.preventDefault();

    const password = document.getElementById('password').ariaValueMax;
    const confirmPassword = document.getElementById('confirmPassword').ariaValueMax;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert('Registration succesful!')
    }
})