const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const body = refs.body;
const checkbox = refs.checkbox;
// body.classList.add(Theme.LIGHT);

function hendleInput() {
  if (body.className === Theme.LIGHT) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
    return;
  }

  if (body.className === Theme.DARK) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
    return;
  }

  //   body.classList.toggle(Theme.LIGHT);
  //   body.classList.toggle(Theme.DARK);

  //   localStorage.setItem('theme', body.className);
}

checkbox.addEventListener('change', hendleInput);

// const savedTheme = localStorage.getItem('theme');

// if (savedTheme !== null) {
//   body.classList.add(savedTheme);
// }

if (location.reload) {
  const savedTheme = localStorage.getItem('theme');

  body.classList.add(savedTheme);

  if (savedTheme === Theme.DARK) {
    checkbox.setAttribute('checked', true);
  }
}
// console.dir(location.reload);

// function saveColorTheme() {
//   const savedTheme = localStorage.getItem('theme');

//   if (savedTheme === Theme.DARK) {
//     checkbox.setAttribute('checked', true);
//   }

//   if (savedTheme !== null) {
//     body.classList.add(savedTheme);
//     return;
//   }
// }

// saveColorTheme();
