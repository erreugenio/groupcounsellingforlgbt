// script.js - Safe Haven LGBTQ+ Group Counseling Interactivity

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle active state
            const isActive = header.classList.contains('active');
            
            // Close all other accordions
            document.querySelectorAll('.accordion-header').forEach(otherHeader => {
                otherHeader.classList.remove('active');
                if (otherHeader.parentElement && otherHeader.parentElement.querySelector('.accordion-content')) {
                    otherHeader.parentElement.querySelector('.accordion-content').style.maxHeight = null;
                }
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
    const successMessage = document.getElementById('formSuccessMessage');
    
    if (form && successMessage) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Hide the form securely via display property
            form.style.display = 'none';
            
            const formIntro = document.querySelector('.form-intro');
            if (formIntro) formIntro.style.display = 'none';
            
            const formWrapper = document.querySelector('.registration-form-wrapper');
            if (formWrapper) {
                const formHeading = formWrapper.querySelector('h2');
                if (formHeading) formHeading.style.display = 'none';
                
                // Set the min-height of the form wrapper so the block doesn't snap abruptly
                formWrapper.style.minHeight = '300px';
                formWrapper.style.display = 'flex';
                formWrapper.style.flexDirection = 'column';
                formWrapper.style.justifyContent = 'center';
            }

            // Immediately show success message to fix the bug where transitions fail to trigger for visitors
            successMessage.classList.remove('hidden');
            successMessage.style.display = 'block';
            successMessage.style.opacity = '1';
        });
    }
});
