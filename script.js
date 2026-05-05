// Encanto do Grão - Professional Interaction Script

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // 1. Navbar Scroll Effect
    const handleHeaderScroll = () => {
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
    };

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // 2. Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // 3. Reveal Animations on Scroll (Regra #3)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Smooth Scroll (Regra #5)
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
