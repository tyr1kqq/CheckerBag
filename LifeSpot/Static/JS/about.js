﻿document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (slides.length === 0) {
        console.error('No slides found.');
        return;
    }

    function changeSlide(index) {
        slides[currentIndex].style.opacity = 0;
        currentIndex = (index + slides.length) % slides.length; // Ensure index is within bounds
        slides[currentIndex].style.opacity = 1;
    }

    prevButton.addEventListener('click', function () {
        changeSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        changeSlide(currentIndex + 1);
    });
});





function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}

function addComment() {
    let comment = new Comment()

    // проверяем, успешно ли юзер осуществил ввод
    if (comment.empty) {
        return;
    }

    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
}

/*
* Запишем объект на страницу
*
* */
const writeReview = review => {
    let likeCounter = '';

    // Если публикуется отзыв - добавляем ему кнопку с лайками.
    if (review.hasOwnProperty('rate')) {

        // Генерим идентификатор комментария.
        let commentId = Math.random();
        // Для кнопки лайков добавляем: идентификатор, атрибут onclick для передачи идентификатора в функцию, значок лайка, и само значение счётчика отделяем пробелом
        // Также мы добавили стиль, чтобы кнопка смотрелась лучше и не имела рамок
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }
    // Запишем результат 
    document.getElementsByClassName('reviews')[0].innerHTML += ' <div class="review-    text">\n' + `<p> <i> <b>${review['author']}</b> ${review['date']}${likeCounter}</i></p>` + `<p>${review['text']}</p>` + '</div>';
}

/*
* Увеличивает счётчик лайков
*
* */
function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ')
}




/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getReview() {
    // Создадим объект
    let review = {}
    
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }
    
    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }
    
    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()
    
    // Добавим на страницу
    writeReview(review)
}


