document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            const questions = data.questions;
            const randomIndex = Math.floor(Math.random() * questions.length);
            const randomQuestionElement = document.getElementById('randomQuestion');
            randomQuestionElement.textContent = questions[randomIndex];
        })
        .catch(error => console.error('Error fetching data:', error));
});
