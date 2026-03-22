// script.js - Safe Haven LGBTQ+ Group Counseling Interactivity

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle active state
            const isActive = header.classList.contains('active');
            
            // Close all other accordions (Optional, for auto-collapse behavior)
            document.querySelectorAll('.accordion-header').forEach(otherHeader => {
                otherHeader.classList.remove('active');
                otherHeader.parentElement.querySelector('.accordion-content').style.maxHeight = null;
            });
            
            // If it wasn't active, open it
            if (!isActive) {
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // 3. Form Submission Handling
    const form = document.getElementById('groupRegistrationForm');
    const formWrapper = document.querySelector('.registration-form-wrapper');
    const successMessage = document.getElementById('formSuccessMessage');
    const formIntro = document.querySelector('.form-intro');
    const formHeading = formWrapper.querySelector('h2');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Optional: You can collect FormData here if needed for an API call
            // const formData = new FormData(form);
            // const data = Object.fromEntries(formData);
            // console.log('Form Submitted securely:', data);
            
            // UI Transition
            // Hide the form slowly
            form.style.opacity = '0';
            form.style.transition = 'opacity 0.4s ease';
            
            if (formIntro) {
                formIntro.style.opacity = '0';
                formIntro.style.transition = 'opacity 0.4s ease';
            }
            if (formHeading) {
                formHeading.style.opacity = '0';
                formHeading.style.transition = 'opacity 0.4s ease';
            }

            setTimeout(() => {
                form.classList.add('hidden');
                if (formIntro) formIntro.classList.add('hidden');
                if (formHeading) formHeading.classList.add('hidden');

                // Show success message
                successMessage.classList.remove('hidden');
                successMessage.style.opacity = '0';
                successMessage.style.transition = 'opacity 0.5s ease';
                successMessage.style.transform = 'translateY(10px)';
                
                // Trigger reflow to apply transition
                void successMessage.offsetWidth;
                
                successMessage.style.opacity = '1';
                successMessage.style.transform = 'translateY(0)';

            }, 400); // match transition time
        });
    }
});
