/* 
  Aya's Wedding - Final Clean Scripts
  - Scroll reveals for sections (Attendance, Message)
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Scroll Reveal for Sections (Triggering Animations)
    const revealSections = document.querySelectorAll('.attendance, .message-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                // Once triggered, we stop observing to keep the state
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px 0px -50px 0px' 
    });

    revealSections.forEach(section => observer.observe(section));

    // Optional: Log for confirmation
    console.log("Wedding LP Interactive Scripts Initialized.");
});
