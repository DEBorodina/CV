const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.carousel__item');

const buttonsHTML = Array.from(items,()=>{
    return `   <button class="carousel__button"></button>`;
})

carousel.insertAdjacentHTML("afterbegin",`
   <div class="carousel__nav">
     ${buttonsHTML.join('')}
   </div>
`)

const buttons = carousel.querySelectorAll('.carousel__button');

const changeItem = (index) => {
    items.forEach(item => item.classList.remove('carousel__item_selected'));
    buttons.forEach(button => button.classList.remove('carousel__button_selected'));

    items[index].classList.add('carousel__item_selected');
    buttons[index].classList.add('carousel__button_selected')
}

buttons.forEach((button,index) => {
    button.addEventListener('click',() => {
        changeItem(index);
    })
})

items[0].classList.add('carousel__item_selected');
buttons[0].classList.add('carousel__button_selected')

const arrowLeft = carousel.querySelector('.carousel__arrow_left');
const arrowRight = carousel.querySelector('.carousel__arrow_right');

const itemsNumber = items.length;

arrowLeft.addEventListener('click',() => {
    const currentItem = carousel.querySelector('.carousel__item_selected');
    const index = (+currentItem.id===0)?(itemsNumber-1):currentItem.id-1;
    changeItem(index);
})

arrowRight.addEventListener('click',() => {
    const currentItem = carousel.querySelector('.carousel__item_selected');
    const index = (+currentItem.id+1)%itemsNumber;
    changeItem(index);
})