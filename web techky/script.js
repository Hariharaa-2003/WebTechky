document.addEventListener('DOMContentLoaded', function () {
        // Store project-specific data in an array
        const projects = [
            {
                description: 'The EatHealthy and StayHealthy website serves as a platform to encourage nutritious eating and a healthy lifestyle. It provides users with easy access to recipes, wellness tips, and fitness guidance, all in one place.',
                url: 'https://eathealthystayhealthi.web.app/index.html'
            },
            {
                description: 'This is a detailed description of the Flipcart project. It offers a seamless shopping experience, integrated interactive features, and real-time product browsing.',
                url: 'https://flipcart-2da1c.web.app/'
            },
            {
                description: 'Created an agriculture website to offer valuable resources and insights for plant care and growth. The platform features a user-friendly interface with tips on plant health, maintenance, and more.',
                url: 'https://agriculture-new.web.app/'
            },
            {
                description: 'This portfolio contains information about the graduate’s knowledge, skills, and CV.',
                url: 'https://selvasanthoshportfolio.web.app/'
            }
        ];

        // Function to open the popup with dynamic content
        function openPopup(projectIndex) {
            const popup = document.getElementById('popup');
            const description = document.getElementById('popup-description');
            const viewButton = document.getElementById('popup-view-btn');

            // Set content dynamically based on the project index
            description.textContent = projects[projectIndex].description;
            viewButton.onclick = function () {
                window.open(projects[projectIndex].url, '_blank');
            };

            popup.style.display = 'flex'; // Show the popup
        }

        // Attach event listeners to Learn More buttons
        const learnButtons = document.querySelectorAll('.learn-btn');
        learnButtons.forEach((button, index) => {
            button.addEventListener('click', function () {
                openPopup(index); // Pass the index of the clicked button
            });
        });

        // Close popup functionality
        document.getElementById('popup-close-btn').addEventListener('click', function () {
            document.getElementById('popup').style.display = 'none';
        });

        // Close popup when clicking outside the popup content
        window.addEventListener('click', function (event) {
            const popup = document.getElementById('popup');
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });

// Function to open the poster popup
function openPosterPopup(imageSrc) {
    const popup = document.getElementById('poster-popup');
    const image = document.getElementById('poster-image');
    image.src = imageSrc;
    popup.style.display = 'block';
    }

    // Function to close the poster popup
    function closePosterPopup() {
    const popup = document.getElementById('poster-popup');
    popup.style.display = 'none';
    }

    // Function to check if an element is in the viewport
    function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // Function to add the 'visible' class to project boxes when they are in view
    function handleScroll() {
    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach(box => {
        if (isInViewport(box)) {
        box.classList.add('visible');
        }
    });
    }

    // Add scroll event listener to trigger animation
    window.addEventListener('scroll', handleScroll);

    // Trigger the animation when the page is loaded (for any already visible sections)
    document.addEventListener('DOMContentLoaded', handleScroll);