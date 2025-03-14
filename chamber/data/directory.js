function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


let lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = lastModifiedDate;