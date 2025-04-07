// Display the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;

// Set the visit message based on localStorage
let lastVisit = localStorage.getItem('lastVisit');
let currentDate = new Date();
let message = 'Welcome! Let us know if you have any questions.';

if (lastVisit) {
  let timeDifference = currentDate - new Date(lastVisit);
  let daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  
  if (daysDifference < 1) {
    message = 'Back so soon! Awesome!';
  } else if (daysDifference === 1) {
    message = `You last visited 1 day ago.`;
  } else {
    message = `You last visited ${daysDifference} days ago.`;
  }
}

// Update localStorage with the current visit time
localStorage.setItem('lastVisit', currentDate);

// Update the visit message in the sidebar
document.querySelector('#visitMessage').textContent = message;

// Fetch JSON data
fetch('data/discover.json')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    const cardContainer = document.querySelector('.card-container');
    data.places.forEach(place => {
      // Create a new card for each place from the JSON data
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = place.id;

      // Populate the card with data from the JSON file
      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;

      // Append the card to the card container in the main section
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
