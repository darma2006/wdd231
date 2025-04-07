// Toggle the mobile menu visibility when the hamburger menu is clicked
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Get the last modified date of the page and display it
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;

// Fetch the weather data for Cartago and display it
async function fetchWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cartago&appid=YOUR_API_KEY&units=metric');
    const weatherData = await response.json();
    const weatherInfo = document.getElementById('weather-info');

    const temperature = weatherData.main.temp.toFixed(0);
    const weatherDescription = weatherData.weather.map(weather => weather.description).join(", ").toUpperCase();

    weatherInfo.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;
}

// Fetch spotlight members from the JSON file and display them
async function fetchSpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const spotlightContainer = document.getElementById('spotlight-container');
    const goldAndSilverMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    const randomSpotlights = [];
    
    while (randomSpotlights.length < 3) {
        const randomMember = goldAndSilverMembers[Math.floor(Math.random() * goldAndSilverMembers.length)];
        if (!randomSpotlights.includes(randomMember)) {
            randomSpotlights.push(randomMember);
        }
    }

    randomSpotlights.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" class="member-img">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
        `;
        spotlightContainer.appendChild(memberCard);
    });
}

// Convert the membership level number to a string
function getMembershipLevel(level) {
    switch(level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Initialize the page by fetching weather and spotlight data
window.onload = () => {
    fetchWeather();
    fetchSpotlights();
};
