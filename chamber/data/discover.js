let lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = lastModifiedDate;

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


localStorage.setItem('lastVisit', currentDate);


document.querySelector('#visitMessage').textContent = message;
