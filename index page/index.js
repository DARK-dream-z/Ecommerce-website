    // Carousel Code
   let currentSlide = 0;
    const slides = [
        {
            imgSrc: "/img/index/story (1).jpg",
            title: "Story 1 Title",
            description: "Story 1 Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            imgSrc: "/img/index/story (2).jpg",
            title: "Story 2 Title",
            description: "Story 2 Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            imgSrc: "/img/index/story (3).jpg",
            title: "Story 3 Title",
            description: "Story 3 Description: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            imgSrc: "/img/index/story (4).jpg",
            title: "Story 4 Title",
            description: "Story 4 Description: Duis aute irure dolor in reprehenderit in voluptate velit esse."
        }
    ];

    const imgElement = document.querySelector('.carousel img');
    const content = document.querySelector('.carousel-content');
    const indicators = document.querySelectorAll('.carousel-indicator');

    function showSlide(index) {
        imgElement.src = slides[index].imgSrc;
        content.querySelector('h2').textContent = slides[index].title;
        content.querySelector('p').textContent = slides[index].description;

        // Update the active indicator
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    // Automatically advance the slides every 5 seconds
    function autoAdvance() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Start auto-advancing after 5 seconds
    setInterval(autoAdvance, 5000);

    // Show the first slide initially
    showSlide(currentSlide);