//  отметил попап   
const popupElement = document.querySelector('.popup');
// кнопка закрыть попап
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
// кнопка открыть попап 
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
//   функция добавления класса для попап
const togglePopupVisibility = function () {
    popupElement.classList.toggle('popup_is-opened');
    nameInput.placeholder = profileName.textContent
    jobInput.placeholder = profileText.textContent

}
// закрытие при нажатии на  overlay
const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    togglePopupVisibility()
}

// событие
popupOpenButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

// форма
let formElement = document.querySelector('.popup__form');
// кнопка имя
let nameInput = formElement.querySelector('.popup__input_data_name');
// кнопка профессия 
let jobInput = formElement.querySelector('.popup__input_data_about');

// отметил профиль блок
let profileInfo = document.querySelector('.profile__info');
// кнопка добавить
let buttonAdd = popupElement.querySelector('.popup__button')


let profileName = profileInfo.querySelector('.profile__info-name');
// функция кнопки добавить 
let profileText = profileInfo.querySelector('.profile__info-text');

function addProfileInfo(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileText.textContent = jobInput.value

    togglePopupVisibility()

}



formElement.addEventListener('submit', addProfileInfo);

// черные лайки
const blackLike = document.querySelectorAll('.element__like');

function likeActive() {
    this.classList.toggle('element__like_active')

}
for (let i of blackLike) {
    i.addEventListener('click', likeActive)
}