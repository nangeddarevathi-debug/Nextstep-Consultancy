// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    // Let form submit to Web3Forms
    // Show success message after a brief delay
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
    }, 100);
});

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}
