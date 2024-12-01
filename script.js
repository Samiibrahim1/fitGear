const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    const messages = document.querySelectorAll('.message');
    let currentMessageIndex = 0;

    function showNextMessage() {
        messages[currentMessageIndex].classList.remove('show');
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messages[currentMessageIndex].classList.add('show');
    }

    // Give the first message a display style
    messages[0].classList.add('show');

    // Change message every 3 seconds
    setInterval(showNextMessage, 3000); 

     // Pop out image effect on page load
    window.onload = function() {
        const img = document.getElementById('pop-out-image');
        img.classList.remove('scale-0');
        img.classList.add('scale-100');
    };
    // Reveal images on page load
window.onload = function() {
    const leftImg = document.getElementById('left-reveal-image');
    const rightImg = document.getElementById('right-reveal-image');
    
    // Reveal Left Image
    leftImg.classList.remove('translate-x-[-100%]', 'opacity-0');
    leftImg.classList.add('translate-x-0', 'opacity-100');

    // Reveal Right Image
    rightImg.classList.remove('translate-x-[100%]', 'opacity-0');
    rightImg.classList.add('translate-x-0', 'opacity-100');
    
    // Handle the pop-out image effect if needed
    const popOutImage = document.getElementById('pop-out-image');
    if (popOutImage) {
        popOutImage.classList.remove('scale-0');
        popOutImage.classList.add('scale-100');
        popOutImage.style.opacity = 1; // Ensure image is fully visible
    }
};

 // Add event listeners to all "Buy" buttons
 document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.previousElementSibling.previousElementSibling.innerText; // Get product name
        alert(`Added ${productName} to your cart!`); // Example action
    });
});

