const scoreList = document.getElementById('scores');

const scoresObj = {
  scores: [],
};

const addList = (score) => {
  scoresObj.scores.push(score);
};

const displayScores = (scores) => {
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const list = `<li class="list">${score.user}: ${score.score}</li>`;
    scoreList.insertAdjacentHTML('beforeend', list);
  });
};

export { addList, displayScores, scoresObj };