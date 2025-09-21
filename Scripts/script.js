const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


if (document.getElementById('priceFilter')) {
    const cars = [
        { name: 'Ferrari 488', price: 32500000, img: 'images/car1.jpg' },
        { name: 'Porsche 911', price: 19500000, img: 'images/car2.jpg' }
    ];
    function renderCars(filter = '') {
        const carList = document.getElementById('carList');
        carList.innerHTML = '';
        cars.filter(car => {
            if (filter === 'under20M') return car.price < 20000000;
            if (filter === 'over20M') return car.price >= 20000000;
            return true;
        }).forEach(car => {
            carList.innerHTML += `
                <div class="car-card">
                    <img src="${car.img}" alt="${car.name}">
                    <h3>${car.name}</h3>
                    <p>KSh ${car.price.toLocaleString()}</p>
                </div>
            `;
        });
    }
    document.getElementById('priceFilter').addEventListener('change', (e) => renderCars(e.target.value));
    renderCars();
}


if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (email.includes('@')) {
            alert('Message sent!');
        } else {
            alert('Invalid email.');
        }
    });
}