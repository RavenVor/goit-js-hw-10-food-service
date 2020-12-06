const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = refs.body;
const checkbox = refs.checkbox;

function defoultNMode() {
  body.classList.add(Theme.LIGHT);
}

function darkMode() {
  body.classList.replace(Theme.LIGHT, Theme.DARK);

  localStorage.setItem('theme', Theme.DARK);
}

function lightMode() {
  body.classList.replace(Theme.DARK, Theme.LIGHT);

  localStorage.setItem('theme', Theme.LIGHT);
}

function hendleInput() {
  if (body.className === Theme.LIGHT) {
    darkMode();
    return;
  }

  if (body.className === Theme.DARK) {
    lightMode();
    return;
  }
}

function saveColorTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    checkbox.setAttribute('checked', true);
  }
}

saveColorTheme();

if (body.className === '') {
  defoultNMode();
}

checkbox.addEventListener('change', hendleInput);
