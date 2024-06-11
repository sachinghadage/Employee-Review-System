// Dummy data for demonstration
const users = [
    { username: 'admin', password: 'admin', isAdmin: true },
    { username: 'employee1', password: 'employee1', isAdmin: false }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = user.isAdmin ? 'admin/admin.html' : 'employee/employee.html';
    } else {
        alert('Invalid username or password');
    }
}
