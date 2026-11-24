function sendEmail() {
    // Read the values entered in the contact form.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Ask the visitor to complete every field before showing confirmation.
    if (!name || !email || !message) {
        document.getElementById('info').textContent = 'Please fill in all fields.';
        return;
    }
    else {
        // Show confirmation when all fields contain a value.
        document.getElementById('info').textContent = 'Thank you for your message! I will contact you soon.';
    }
}

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navigation.classList.toggle('is-open', !isOpen);
});