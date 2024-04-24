// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // List of image URLs
    const imageUrls = [
        'images/car.jpeg',
        'images/cat.webp',
        'images/demon slayer.webp',
        'images/dragon.jpeg',
        'images/ROG.webp',
        'images/thor.webp',
        'images/demon slayer.webp',
        'images/demon slayer.webp',
        // Add more image URLs as needed
    ];

    // Loop through each image URL
    imageUrls.forEach(imageUrl => {
        // Create a new card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create a new image element
        const img = document.createElement('img');
        img.src = imageUrl;

        // Append the image to the card
        card.appendChild(img);

        // Append the card to the gallery
        document.querySelector('.gallery').appendChild(card);

        // Call the function to assign card size
        assignCardSize(card, img);
    });
});

// Function to assign card size based on image height
function assignCardSize(card, img) {
    // Get the height of the image
    const imgHeight = img.naturalHeight;
    
console.log(imgHeight);

    // Define thresholds for small, medium, and large sizes
    const smallThreshold = 200;
    const mediumThreshold = 400;

    // Determine the size of the card based on the image height
    if (imgHeight < smallThreshold) {
        card.classList.add('card_small');
    } else if (imgHeight < mediumThreshold) {
        card.classList.add('card_medium');
    } else {
        card.classList.add('card_large');
    }
}
