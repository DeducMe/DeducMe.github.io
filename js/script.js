
function buildCard(resultBlock, cardValue){
    let card = document.createElement('a');
    card.innerHTML =
        '<img class="partners__card-image" src='+cardValue['companyPicture']+' alt="логотип '+cardValue['companyName']+'">'
    $(card)
        .addClass('partners__card')
        .appendTo($(resultBlock))
}

function start(data){
    let partnersBlock = $('.partners-list')

    $.each(data['partners'], function(index, partner) {
        buildCard(partnersBlock, partner)
    });

    
}

fetch("../data.json")
.then(response => {
   return response.json();
})
.then(data => {
    setTimeout(() => {              // Здесь показываю как будет работать код при загрузке данных с сервера c задержкой
        start(data);
    }, 10)
});








  