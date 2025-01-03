const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
