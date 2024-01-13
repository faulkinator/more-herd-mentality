document.addEventListener("DOMContentLoaded", function () {
    // Display a random question
    function refreshQuestion(questions) {
        const randomIndex = Math.floor(Math.random() * questions.length);

        // Show a random question to the user 
        const randomQuestion = document.getElementById('randomQuestion');
        randomQuestion.textContent = `${questions[randomIndex]}`;

        // Show the question number and total to the user
        const randomQuestionIndex = document.getElementById('randomQuestionIndex');
        randomQuestionIndex.textContent = `Question ${randomIndex + 1} of ${questions.length}`;
    }

    // Fetch questions on load
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            const questions = data.questions;

            // Initial question load
            refreshQuestion(questions);

            // Adding click event listener to the refresh button
            const refreshButton = document.getElementById('refreshQuestion');
            refreshButton.addEventListener('click', function () {
                refreshQuestion(questions);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
