// Encanto do Grão - Professional Interaction Script

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(75, 46, 43, 0.98)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            document.querySelector('.logo').style.color = '#F5E6D3';
            document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '#F5E6D3');
        } else {
            header.style.background = 'rgba(255, 248, 240, 0.95)';
            header.style.boxShadow = 'none';
            document.querySelector('.logo').style.color = '#4B2E2B';
            document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '#2A1F19');
        }
    });

    // Reveal Animations (Regra #9)
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, revealOptions);

    // Aplicando animação inicial aos elementos que queremos revelar
    const animatedElements = document.querySelectorAll('.menu-card, .testimonial-card, .feature-item, .about-content, .about-img');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(el);
    });

    // Smooth Scroll Fix
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
