document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('logo');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const serviceCards = document.getElementById('service-cards');
    const helpItems = document.querySelectorAll('.help-item');

    // Logo rotation on hover
    logo.addEventListener('mouseover', function() {
        logo.style.transition = 'transform 0.5s';
        logo.style.transform = 'rotate(360deg)';
    });
    logo.addEventListener('mouseout', function() {
        logo.style.transition = 'transform 0.5s';
        logo.style.transform = 'rotate(0deg)';
    });

    // Typewriter effect for hero section
    typeWriterEffect(heroTitle, "Welcome to Cybrlytics", 100);
    typeWriterEffect(heroSubtitle, "Passionate, Commitment, Fearless, Collaboration.", 50);

    // Dynamically load service cards
    const services = [
        { img: 'dataanal.jpg', title: 'Data Analysis', desc: 'We help you analyze your data to extract meaningful insights.' },
        { img: 'cybersec.jpg', title: 'Cybersecurity', desc: 'Protect your digital assets with our top-notch security solutions.' },
        { img: 'sap.jpg', title: 'SAP Services', desc: 'Optimize your business processes with tailored SAP solutions.' },
        { img: 'indus.jpg', title: 'Industry 4.O Solutions', desc: 'Implement cutting-edge technologies for smart manufacturing.' },
        { img: 'lean.jpg', title: 'Lean Six Sigma', desc: 'Drive efficiency and quality through systematic process improvement.' },
        { img: 'enabler.jpg', title: 'Enabler Services', desc: 'Enable growth and transformation with strategic support services.' }
    ];

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        `;
        serviceCards.appendChild(card);
    });

    // Dynamically load help items
    const helpItemsData = [
        { img: 'settings.gif', title: 'Innovation Consulting' },
        { img: 'fireworks.gif', title: 'Artificial Intelligence' },
        { img: 'checklist.gif', title: 'Software Engineering' },
        { img: 'idea.gif', title: 'Data & Analytics' },
        { img: 'copy.gif', title: 'Digital Transformation' },
        { img: 'globe.gif', title: 'Globally Collaborate' },
        { img: 'time.gif', title: 'Timely Update' },
        { img: 'diagram.gif', title: 'Extended Reality' }
    ];

    helpItems.forEach((item, index) => {
        const data = helpItemsData[index];
        item.innerHTML = `
            <img src="${data.img}" alt="${data.title}">
            <h3>${data.title}</h3>
        `;
    });

    // Carousel functionality
    let currentIndex = 0;
    const totalItems = helpItems.length;

    function showItems(index) {
        helpItems.forEach((item, i) => {
            item.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
        });
    }

    function prevItem() {
        currentIndex = (currentIndex - 3 + totalItems) % totalItems;
        showItems(currentIndex);
    }

    function nextItem() {
        currentIndex = (currentIndex + 3) % totalItems;
        showItems(currentIndex);
    }

    // Initial display
    showItems(currentIndex);

    window.prevItem = prevItem;
    window.nextItem = nextItem;
});

function typeWriterEffect(element, text, speed) {
    let i = 0;
    element.innerHTML = '';  // Clear the element's content before starting the typewriter effect
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
