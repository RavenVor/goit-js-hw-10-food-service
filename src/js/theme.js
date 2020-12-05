const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

refs.body.classList.add(Theme.LIGHT);

function hendleInput() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  localStorage.setItem('theme', refs.body.className);
}

refs.checkbox.addEventListener('change', hendleInput);

function saveColorTheme() {
  const savedTheme = localStorage.getItem('theme');

  savedTheme === Theme.DARK
    ? refs.checkbox.setAttribute('checked', true)
    : refs.checkbox.removeAttribute('checked');

  if (savedTheme) {
    refs.body.className = savedTheme;
  }
}

saveColorTheme();
