function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}

document.getElementById('langButton').addEventListener('click', function() {
    if (this.innerText === 'EN') {
        this.innerText = 'ID';
        this.classList.remove('btn-light');
        this.classList.add('btn-success');
        // this.classList.remove('btn-success');
        // this.classList.add('btn-light');
        changeLanguage('en');
    } else {
        this.innerText = 'EN';
        this.classList.remove('btn-light');
        this.classList.add('btn-success');
        // this.classList.remove('btn-success');
        // this.classList.add('btn-light');
        changeLanguage('id');
    }
});

// document.getElementById('langButton').addEventListener('touchstart', function() {
//     if (this.innerText === 'EN') {
//         this.innerText = 'ID';
//         this.classList.remove('btn-success');
//         this.classList.add('btn-light');
//         changeLanguage('en');
//     } else {
//         this.innerText = 'EN';
//         this.classList.remove('btn-light');
//         this.classList.add('btn-success');
//         changeLanguage('id');
//     }
// });


// const langToggle = document.getElementById('langButton');
// const englishContent = document.querySelectorAll('[data-lang="en"]');
// const spanishContent = document.querySelectorAll('[data-lang="id"]');

// langToggle.addEventListener('click', () => {
//   if (langToggle.textContent === 'EN') {
//     englishContent.forEach(element => {
//       element.style.display = 'block';
//     });
//     spanishContent.forEach(element => {
//       element.style.display = 'none';
//     });
//     langToggle.textContent = 'ID';
//   } else {
//     englishContent.forEach(element => {
//       element.style.display = 'none';
//     });
//     spanishContent.forEach(element => {
//       element.style.display = 'block';
//     });
//     langToggle.textContent = 'EN';
//   }
// });