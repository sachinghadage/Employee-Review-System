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
        listItem.innerHTML += ` <button onclick="editEmployee(${employee.id})">Edit</button>`;
        listItem.innerHTML += ` <button onclick="removeEmployee(${employee.id})">Remove</button>`;
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
        listItem.innerHTML += ` <button onclick="editReview(${review.id})">Edit</button>`;
        listItem.innerHTML += ` <button onclick="removeReview(${review.id})">Remove</button>`;
        reviewList.appendChild(listItem);
    });
}

// Function to handle employee form submission
function handleEmployeeForm(event) {
    event.preventDefault();
    const id = document.getElementById('employeeId').value;
    const name = document.getElementById('employeeName').value;
    
    if (id) {
        // Update employee
        const index = employees.findIndex(employee => employee.id == id);
        if (index !== -1) {
            employees[index].name = name;
        }
    } else {
        // Add new employee
        const newId = employees.length ? employees[employees.length - 1].id + 1 : 1;
        employees.push({ id: newId, name });
    }
    
    displayEmployees();
    document.getElementById('employeeForm').reset();
}

// Function to handle review form submission
function handleReviewForm(event) {
    event.preventDefault();
    const id = document.getElementById('reviewId').value;
    const employeeId = document.getElementById('reviewEmployeeId').value;
    const reviewText = document.getElementById('reviewText').value;
    
    if (id) {
        // Update review
        const index = reviews.findIndex(review => review.id == id);
        if (index !== -1) {
            reviews[index].employeeId = employeeId;
            reviews[index].reviewText = reviewText;
        }
    } else {
        // Add new review
        const newId = reviews.length ? reviews[reviews.length - 1].id + 1 : 1;
        reviews.push({ id: newId, employeeId, reviewText });
    }
    
    displayReviews();
    document.getElementById('reviewForm').reset();
}

// Function to handle assigning reviews
function handleAssignForm(event) {
    event.preventDefault();
    const employeeId = document.getElementById('assignEmployeeId').value;
    const reviewerIds = document.getElementById('assignReviewerIds').value.split(',').map(id => parseInt(id.trim()));
    
    assignReviewers(employeeId, reviewerIds);
    document.getElementById('assignForm').reset();
}

// Function to assign employees to review another employee
function assignReviewers(employeeId, reviewers) {
    // Implement your logic to assign reviewers to the specified employeeId
    // This could involve updating a data structure or database record
    console.log(`Assigning reviewers ${reviewers} to employee ID ${employeeId}`);
}

// Function to edit an employee
function editEmployee(id) {
    const employee = employees.find(employee => employee.id === id);
    if (employee) {
        document.getElementById('employeeId').value = employee.id;
        document.getElementById('employeeName').value = employee.name;
    }
}

// Function to remove an employee
function removeEmployee(id) {
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        displayEmployees();
    }
}

// Function to edit a review
function editReview(id) {
    const review = reviews.find(review => review.id === id);
    if (review) {
        document.getElementById('reviewId').value = review.id;
        document.getElementById('reviewEmployeeId').value = review.employeeId;
        document.getElementById('reviewText').value = review.reviewText;
    }
}

// Function to remove a review
function removeReview(id) {
    const index = reviews.findIndex(review => review.id === id);
    if (index !== -1) {
        reviews.splice(index, 1);
        displayReviews();
    }
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

// Call display functions on page load
displayEmployees();
displayReviews();
