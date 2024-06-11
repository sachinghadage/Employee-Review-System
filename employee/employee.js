// Sample JSON data
const reviews = [
    { id: 1, employeeId: 2, reviewText: 'Improvement needed' }
];

// Function to fetch and display reviews requiring feedback
function displayReviews() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    
    reviews.forEach(review => {
        const listItem = document.createElement('div');
        listItem.textContent = `Review ID: ${review.id}, Employee ID: ${review.employeeId}, Review: ${review.reviewText}`;
        reviewList.appendChild(listItem);
    });
}

// Function to handle feedback form submission
function handleFeedbackForm(event) {
    event.preventDefault();
    const reviewId = document.getElementById('reviewId').value;
    const feedbackText = document.getElementById('feedbackText').value;
    
    const review = reviews.find(review => review.id == reviewId);
    if (review) {
        review.feedback = feedbackText;
        alert('Feedback submitted successfully');
    } else {
        alert('Review ID not found');
    }
    
    document.getElementById('feedbackForm').reset();
    displayReviews();
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

// Call display function on page load
displayReviews();
