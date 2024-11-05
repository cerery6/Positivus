const scrollContainer = document.querySelector('.scroll-container');

// Для десктопов — прокрутка колесом мыши
scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Отключаем стандартное поведение прокрутки
    scrollContainer.scrollLeft += event.deltaY > 0 ? 100 : -100;
});

// Для мобильных устройств — прокрутка с помощью свайпа
let startX; // Начальная позиция касания
let scrollLeft; // Текущая позиция прокрутки

scrollContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].pageX; // Получаем начальную позицию касания по оси X
    scrollLeft = scrollContainer.scrollLeft; // Запоминаем текущую позицию прокрутки
});

scrollContainer.addEventListener('touchmove', (event) => {
    const x = event.touches[0].pageX; // Получаем текущую позицию пальца по оси X
    const walk = startX - x; // Разница между начальной и текущей позицией
    scrollContainer.scrollLeft = scrollLeft + walk; // Прокручиваем контейнер
});