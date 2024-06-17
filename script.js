document.addEventListener("DOMContentLoaded", function() {
    const parallax = document.querySelector('.parallax');
    const parallaxContainer = document.querySelector('.parallax-container');

    document.addEventListener("mousemove", function(e) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        parallax.style.transform = `perspective(1000px) translate3d(${xAxis}px, ${yAxis}px, 0)`;
    });

    const items = document.querySelectorAll('.service-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('white', 'neon');
        items[currentIndex].classList.add('gray');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.remove('gray');
        items[currentIndex].classList.add('white', 'neon');
    }

    setInterval(showNextItem, 500);

    function createStar(x, y) {
        const star = document.createElement('span');
        star.innerHTML = '★'; // Звездочка в качестве текста
        star.classList.add('star'); // Добавляем класс для стилизации звездочки
        star.style.left = `${x}px`; // Устанавливаем позицию звездочки по горизонтали
        star.style.top = `${y}px`; // Устанавливаем позицию звездочки по вертикали
        parallaxContainer.appendChild(star); // Добавляем звездочку в контейнер

        // Удаляем звездочку из DOM после анимации
        setTimeout(() => {
            star.remove();
        }, 100);
    }


    });
