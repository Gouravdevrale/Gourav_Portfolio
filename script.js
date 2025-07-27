// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Scroll Sections Active Link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${id}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js Animation
const typed = new Typed('.text-animate', {
    strings: ['MERN Stack Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Resume Download
document.getElementById('resume-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = './Gourav_Devrale_Resume 10.pdf'; // Replace with your resume path
    link.download = 'Gourav_Devrale_Resume 10.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Form Submission
const contactForm = document.querySelector('form');
const inputs = document.querySelectorAll('input, textarea');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        phone: this.querySelector('input[type="number"]').value,
        subject: this.querySelectorAll('input[type="text"]')[1].value,
        message: this.querySelector('textarea').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
    inputs.forEach(input => {
        input.nextElementSibling.style.width = '0';
    });
});

// Input field focus animation
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.nextElementSibling.style.width = '100%';
    });
    
    if (input.value !== '') {
        input.nextElementSibling.style.width = '100%';
    }
});