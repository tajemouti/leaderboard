import './style.css';
import { displayScores, addList } from './app.js';

const form = document.getElementById('form');
const name = document.getElementById('user');
const scoreId = document.getElementById('score');
const refreshBtn = document.getElementById('refresh');

const addValue = async (e) => {
  e.preventDefault();
  if (!name.value || !scoreId.value) return;
  await addList({ user: name.value, score: scoreId.value });
  name.value = '';
  scoreId.value = '';
};

const displayAPI = async () => {
  const fetchAPI = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9yGaGKSA5YKGeCnBxx8J/scores/');
  const data = await fetchAPI.json();
  displayScores(data.result);
};

form.addEventListener('submit', addValue);
refreshBtn.addEventListener('click', displayAPI);
