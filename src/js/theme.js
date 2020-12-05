const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

function hendleInput() {
  if (refs.body.className === '') {
    refs.body.classList.add(Theme.LIGHT);
  }
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  const currentTheme = refs.body.getAttribute('class');
  localStorage.setItem('theme', currentTheme);
}

function saveColorTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    refs.checkbox.setAttribute('checked', true);
  }

  if (savedTheme) {
    refs.body.className = savedTheme;
  }
}

saveColorTheme();

refs.checkbox.addEventListener('change', hendleInput);
