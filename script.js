// Café Alquimia - Premium Ultra Interactions

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    
    // 1. Header Scroll Effect
    const handleHeaderScroll = () => {
        // Scroll Progress Bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Verificar estado inicial

    // 2. Magnetic Buttons
    const magneticWraps = document.querySelectorAll('.magnetic-wrap');
    magneticWraps.forEach(wrap => {
        wrap.addEventListener('mousemove', (e) => {
            const rect = wrap.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const btn = wrap.querySelector('.btn, button');
            if (btn) {
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            }
        });

        wrap.addEventListener('mouseleave', () => {
            const btn = wrap.querySelector('.btn, button');
            if (btn) {
                btn.style.transform = `translate(0px, 0px)`;
            }
        });
    });

    // 3. Tilt Effect for Cards
    const tiltElements = document.querySelectorAll('.tilt-element');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    // 4. Floating Beans Generator
    const floatingContainer = document.getElementById('floating-assets');
    const createBean = () => {
        const bean = document.createElement('i');
        bean.className = 'fas fa-seedling floating-bean'; // Usando seedling como ícone de grão
        bean.style.left = Math.random() * 100 + 'vw';
        bean.style.animationDuration = (Math.random() * 10 + 10) + 's';
        bean.style.fontSize = (Math.random() * 20 + 10) + 'px';
        floatingContainer.appendChild(bean);

        setTimeout(() => {
            bean.remove();
        }, 20000);
    };

    setInterval(createBean, 2000);

    // 5. Intersection Observer for Reveal
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, revealOptions);

    document.querySelectorAll('section, .tilt-element, .section-header').forEach(el => {
        revealObserver.observe(el);
    });

    // 6. Smooth Scroll Fix
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
