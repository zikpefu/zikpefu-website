import './style.css';

const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const preferredTheme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

root.dataset.theme = savedTheme || preferredTheme;
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});
