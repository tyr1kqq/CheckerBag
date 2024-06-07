
function getComment() {
    let comment = {}

    comment.author = promt("Как вас зовут?")
    if (comment.author == null) {
        return
    }

    comment.text = promt("Напишите ваш отзыв")
    if (comment.text == null) {
        return
    }

    coment.date = new Date().toISOString()

    let eneableLikes = confirm("Разрешить пользователям оценивать ваш озыв?")

    if (eneableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;

        //Добавим отзыв с возможностью  пользовательских оценок 
        writeReview(review)
    }
    else {
        //Добавим простой коментарий без возможности оценки 
        writeReview(comment)
    }
}

/*
* Запишем объект на страницу
*
* */
const writeReview = review => {
    let likeCounter = '';

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }

    // Запишем результат
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
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


