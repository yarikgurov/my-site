// Переключение темы
const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeButton.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
});

// Счётчик
const countElement = document.getElementById('count');
const likeButton = document.getElementById('like');
let count = 0;

likeButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});
