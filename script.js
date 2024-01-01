document.addEventListener("DOMContentLoaded", function () {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            const questions = data.questions;
            const randomIndex = Math.floor(Math.random() * questions.length);
            
            // Showing a random question to the user 
            const randomQuestion = document.getElementById('randomQuestion');
            randomQuestion.textContent = `${questions[randomIndex]}`;
            
            // Showing the question number and total to the user
            const randomQuestionIndex = document.getElementById('randomQuestionIndex');
            randomQuestionIndex.textContent = `Question ${randomIndex + 1} of ${questions.length}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
