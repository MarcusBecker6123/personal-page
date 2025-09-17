export function cardAnimation() {
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.classList.remove('animate-out');
            }
            else {
                entry.target.classList.add('animate-out');
                entry.target.classList.remove('animate-in');
            }
        });
    }, { threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
     });
    cards.forEach(card => cardObserver.observe(card));
};