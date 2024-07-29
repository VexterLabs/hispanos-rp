// script.js
document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const status = document.getElementById('status');

    if (username === '' || password === '') {
        status.textContent = 'Por favor, complete todos los campos.';
        status.style.color = 'red';
        return;
    }

    // Simulación de autenticación
    if (username === 'admin' && password === '1234') {
        status.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
        status.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'home.html'; // Reemplaza con la IP y puerto de tu servidor
        }, 2000);
    } else {
        status.textContent = 'Usuario o contraseña incorrectos.';
        status.style.color = 'red';
    }
});
