// Quote Form Submission with Validation
document.getElementById('quoteForm').onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById('quoteName');
    let email = document.getElementById('quoteEmail');
    let phone = document.getElementById('quotePhone');
    let product = document.getElementById('quoteProduct');
    let quantity = document.getElementById('quoteQuantity');

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('productError').textContent = '';
    document.getElementById('quantityError').textContent = '';

    let valid = true;

    if (!name.value.trim()) {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Valid email is required.';
        valid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phone.value.trim() || !phonePattern.test(phone.value)) {
        document.getElementById('phoneError').textContent = 'Valid 10-digit phone required.';
        valid = false;
    }

    if (!product.value) {
        document.getElementById('productError').textContent = 'Select a product.';
        valid = false;
    }

    if (!quantity.value || Number(quantity.value) < 1) {
        document.getElementById('quantityError').textContent = 'Enter valid quantity.';
        valid = false;
    }

    if (valid) {
        document.getElementById('quoteForm').reset();
        document.getElementById('quoteSuccess').style.display = 'block';
        setTimeout(() => {
            document.getElementById('quoteSuccess').style.display = 'none';
        }, 4000);
    }
    return false;
};

// Contact Form Submission
document.getElementById('contactForm').onsubmit = function (e) {
    e.preventDefault();
    document.getElementById('contactForm').reset();
    document.getElementById('contactSuccess').style.display = 'block';
    setTimeout(() => {
        document.getElementById('contactSuccess').style.display = 'none';
    }, 4000);
    return false;
};

// Highlight navigation bar tab on scroll
window.onscroll = function () {
    const sections = ['home', 'about', 'products', 'quote', 'contact'];
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos + 100) {
            document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
            document.querySelector('nav ul li a[href="#' + sections[i] + '"]').classList.add('active');
        }
    }
};
