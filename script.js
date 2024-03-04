document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const heroContainers = document.querySelectorAll('.hero-container');
    const heroRightElements = document.querySelectorAll('.hero-right');




    // Redirect to index.html on logo click
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    let currentBackground = 0;

    const linkArr = [
        'url(image/back-0.png)',
        'url(image/back-1.jpg)',
        'url(image/back-3.avif)',
        'url(image/back-4.jpg)',
        'url(image/back-5.jpg)',
    ];

    // Toggle background and content visibility
    function toggleBackground(index) {
        heroContainers.forEach(container => {
            container.style.backgroundImage = linkArr[index];
        });
        hideContent(index);
    }
    // Define the backgroundRepeat function
    function backgroundRepeat(index) {
        var element = document.querySelector('.hero-container'); // Change the selector to target your specific element
        if (index === 0) {
            element.style.backgroundRepeat = "no-repeat";
        } else {
            element.style.backgroundRepeat = "repeat";
        }

    }

    // Add event listener for window resize
    window.addEventListener('resize', function() {
        var width = window.innerWidth;

        // Check if width is less than or equal to 610 pixels
        if (width <= 610) {
            // Call backgroundRepeat function with index 0
            index = 0;
        } else {
            // Call backgroundRepeat function with index 1
            index = 1;
        }
    });

    // Trigger the event listener initially to set the initial background repeat
    // window.dispatchEvent(new Event('resize'));



    // Hide or show hero content based on the current background
    function hideContent(index) {
        if (index === 0) {
            heroRightElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            heroRightElements.forEach(element => {
                element.style.display = 'block';
            });
        }
    }

    // Handle keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.code === 'ArrowRight') {
            currentBackground = (currentBackground + 1) % linkArr.length;
            toggleBackground(currentBackground);
        } else if (event.code === 'ArrowLeft') {
            currentBackground = (currentBackground - 1 + linkArr.length) % linkArr.length;
            toggleBackground(currentBackground);
        }
    });

    // Initialize the hero section with the initial background
    toggleBackground(currentBackground);
});