// Sample JSON data
const reviews = [
    { id: 1, employeeId: 2, reviewText: 'Improvement needed' }
];

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

// Call display function on page load
displayReviews();

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}
