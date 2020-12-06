const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

function hendleInput() {
  const body = refs.body;

  if (body.className === '') {
    body.classList.add(Theme.LIGHT);
  }

  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  localStorage.setItem('theme', body.className);
}

function saveColorTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    refs.checkbox.setAttribute('checked', true);
  }

  if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }
}

saveColorTheme();

refs.checkbox.addEventListener('change', hendleInput);
