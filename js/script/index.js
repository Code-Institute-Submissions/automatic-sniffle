const card = document.querySelectorAll('.playing-card');

function flip() {
    this.classList.toggle('face-hidden');
}

card.forEach(card => card.addEventListener('click', flip));
