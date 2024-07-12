document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    
    window.addEventListener('load', () => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            document.body.classList.remove('loaded');
            setTimeout(() => {
                window.location.href = target;
            }, 1000);
        });
    });
});
