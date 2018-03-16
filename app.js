(function initializePage() {
  getData();
  document.querySelector('.answer-button').addEventListener('click', showAnswer);
})();

function getData() {
  fetch('https://jservice.io/api/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      const questionContainer = document.querySelector('.question-container');
      const question = document.createElement('p');
      question.innerText = data[0].question;
      questionContainer.appendChild(question);
      localStorage.setItem('answer', data[0].answer);
    })
    .catch(function(err) {
      console.log(err.message);
    });
}

function showAnswer() {
  const answerContainer = document.querySelector('.answer-container');
  const answerText = document.createElement('p');
  answerText.innerText = localStorage.getItem('answer');
  answerContainer.appendChild(answerText);
}
