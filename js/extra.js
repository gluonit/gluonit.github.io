function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}

document.getElementById('langButton').addEventListener('click', function() {
    if (this.innerText === 'EN') {
        this.innerText = 'ID';
        this.classList.remove('btn-success');
        this.classList.add('btn-light');
        changeLanguage('en');
    } else {
        this.innerText = 'EN';
        this.classList.remove('btn-light');
        this.classList.add('btn-success');
        changeLanguage('id');
    }
});