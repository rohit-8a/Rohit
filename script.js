/**
 * Interactive Script for handling Login/Sign-up Toggles
 */

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// When user clicks 'Sign Up', add 'active' class to wrapper
// This triggers the CSS transitions for the diagonal background and form sliding
registerLink.onclick = (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
};

// When user clicks 'Login', remove 'active' class from wrapper
// This reverses the animations back to the initial login state
loginLink.onclick = (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
};

// Optional: Prevent default form submission for demonstration
// This stops the page from refreshing when you click the Login or Sign Up buttons
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submission intercepted for demo.');
    });
});
