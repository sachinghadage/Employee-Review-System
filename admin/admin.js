// Sample JSON data
const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];

const reviews = [
    { id: 1, employeeId: 1, reviewText: 'Excellent performance' },
    { id: 2, employeeId: 2, reviewText: 'Improvement needed' }
];

// Function to fetch and display employees
function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    
    employees.forEach(employee => {
        const listItem = document.createElement('div');
        listItem.textContent = `ID: ${employee.id}, Name: ${employee.name}`;
        employeeList.appendChild(listItem);
    });
}

// Function to fetch and display reviews
function displayReviews() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    
    reviews.forEach(review => {
        const listItem = document.createElement('div');
        listItem.textContent = `Review ID: ${review.id}, Employee ID: ${review.employeeId}, Review: ${review.reviewText}`;
        reviewList.appendChild(listItem);
    });
}

// Call display functions on page load
displayEmployees();
displayReviews();

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}
