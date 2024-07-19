document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated-text, .animated-link');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
    });
});
