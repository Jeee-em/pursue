document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const mainImage = document.getElementById('mainImage');
    const heading = document.querySelector('h1'); // Select the <h1> element

    // Define the new image source and new heading text
    const newImageSrc = 'https://media.tenor.com/AL4ZMzBLtvgAAAAj/aww-cute.gif'; // Replace with your new image URL
    const newHeadingText = 'Thank you for your response!'; // Replace with your new heading text

    // Function to get random position
    function getRandomPosition() {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        return { x, y };
    }

    // Function to move the button
    function moveButton() {
        const { x, y } = getRandomPosition();
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Event listeners
    yesButton.addEventListener('click', () => {
        mainImage.src = newImageSrc;
        heading.textContent = newHeadingText;
        yesButton.style.display = 'none'; // Hide the "Yes" button
        noButton.style.display = 'none'; // Hide the "No" button
    });

    noButton.addEventListener('mouseover', () => {
        moveButton();
    });

    noButton.addEventListener('touchstart', () => {
        moveButton();
    });

    // Ensure "No" button moves on mobile touch
    noButton.addEventListener('click', () => {
        moveButton();
    });
});
