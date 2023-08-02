const scoreList = document.getElementById('scores');

const addList = async (score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9yGaGKSA5YKGeCnBxx8J/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const displayScores = (scores) => {
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const list = `<li class="list">${score.user}: ${score.score}</li>`;
    scoreList.insertAdjacentHTML('beforeend', list);
  });
};

export { addList, displayScores };