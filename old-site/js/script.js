// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const formData = new FormData(contactForm);
            const formMessage = document.getElementById('formMessage');
            
            // Simple validation check
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                } else {
                    field.style.borderColor = '#d4d4d4';
                }
            });
            
            if (!isValid) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
                return;
            }
            
            // Email validation
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.';
            
            // Reset form
            contactForm.reset();
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed in future)
    const setupMobileMenu = () => {
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 968 && nav) {
            // Mobile menu functionality can be added here if needed
        }
    };
    
    window.addEventListener('resize', setupMobileMenu);
    setupMobileMenu();
});

// Add active class to current page in navigation
window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
