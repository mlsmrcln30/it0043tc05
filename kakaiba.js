document.addEventListener('DOMContentLoaded',() => {
    document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop - document.querySelector('nav').offsetHeight
    });  
    });
    });

    const modal = document.getElementById('profile-modal');
    const modalImg = document.getElementById('profile-img-modal');

    document.querySelectorAll('.profile img').forEach(img => {
        img.addEventListener('click',function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    modal.addEventListener('click',function(e) {
        if (e.target === modal || e.target.classList.contains('close')) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!validateEmail(email) || message.trim() === '') {
        event.preventDefault();
    alert('Please enter a valid email and message.');
    }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});