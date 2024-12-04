
document.addEventListener('DOMContentLoaded', function() {
    const scrollUp = document.getElementById('scrollUpArrow'); 

    
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };


    scrollUp.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
    
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});



