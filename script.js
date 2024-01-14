document.addEventListener("DOMContentLoaded", function () {
    let usedIndices = [];

    // Function to display a random question
    function refreshQuestion(questions) {
        if (usedIndices.length === questions.length) {
            // Reset usedIndices if all questions have been used
            usedIndices = [];
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (usedIndices.includes(randomIndex));

        // Add the used index to the list
        usedIndices.push(randomIndex);

        // Showing a random question to the user 
        const randomQuestion = document.getElementById('randomQuestion');
        randomQuestion.textContent = `${questions[randomIndex]}`;

        // Showing the question number and total to the user
        const randomQuestionIndex = document.getElementById('randomQuestionIndex');
        randomQuestionIndex.textContent = `Question ${usedIndices.length} of ${questions.length}`;
    }

    // Fetch questions on page load
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            const questions = data.questions;

            // Initial question load
            refreshQuestion(questions);

            // Adding click event listener to the "NEXT QUESTION" link
            const refreshButton = document.getElementById('refreshQuestion');
            refreshButton.addEventListener('click', function () {
                refreshQuestion(questions);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
