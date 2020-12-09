const refs = {
  body: document.body,
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');
const body = refs.body;
const checkbox = refs.checkbox;

function hendleInput() {
  if (body.className === Theme.DARK) {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    return;
  }

  if (body.className === Theme.LIGHT) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
}

checkbox.addEventListener('change', hendleInput);

if (savedTheme) {
  body.classList.add(savedTheme);

  if (savedTheme === Theme.DARK) {
    checkbox.checked = true;
  }
}

if (body.className === '') {
  body.classList.add(Theme.LIGHT);
}
