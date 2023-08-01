import './style.css';
import { displayScores, addList, scoresObj } from './app.js';

const form = document.getElementById('form');
const name = document.getElementById('user');
const scoreId = document.getElementById('score');

const addValue = (e) => {
  e.preventDefault();
  if (!name.value || !scoreId.value) return;
  addList({ user: name.value, score: scoreId.value });
  name.value = '';
  scoreId.value = '';
  displayScores(scoresObj.scores);
};

form.addEventListener('submit', addValue);