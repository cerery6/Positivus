// Получаем все кнопки
const buttons = document.querySelectorAll('button[id^="_"]');

buttons.forEach(button => {
    button.onclick = function() {
        const element = button.closest('.card_buttom').querySelector('.card_buttom_text_container'); // Находим текст
        const h = button.closest('.card_buttom'); // Находим карточку
        let computedHeight = window.getComputedStyle(h).height;

        const plus = button.querySelector('.plus'); // Получаем элемент plus из кнопки

        // Переводим строку в числовое значение для удобства сравнения
        let currentHeight = parseInt(computedHeight);

        if (currentHeight === 155) { 
            // Раскрытие карточки
            h.style.height = '275px';
            h.style.backgroundColor = 'rgb(185, 255, 102)';
            plus.style.backgroundColor = 'rgb(243, 243, 243)'; // Меняем цвет кнопки при нажатии
            setTimeout(() => {
                element.classList.remove('hidden'); // Показываем текст с задержкой
            }, 100);

        } else if (currentHeight === 275) { 
            // Сворачивание карточки
            h.style.height = '155px';
            h.style.backgroundColor = 'rgb(243, 243, 243)';
            plus.style.backgroundColor = 'black'; // Возвращаем цвет кнопки
            element.classList.add('hidden'); // Скрываем текст
        } 
        // Добавляем логику для высоты 100px, если требуется
        else if (currentHeight === 100) { 
            h.style.height = '375px';
            h.style.backgroundColor = 'rgb(185, 255, 102)';
            plus.style.backgroundColor = 'rgb(243, 243, 243)';
            setTimeout(() => {
                element.classList.remove('hidden'); 
            }, 100);
        } else {
            h.style.height = '100px';
            h.style.backgroundColor = 'rgb(243, 243, 243)';
            plus.style.backgroundColor = 'black';
            element.classList.add('hidden');
        }
    }
});
