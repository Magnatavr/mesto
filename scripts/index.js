//  отметил попап   
const popupElement = document.querySelector('.popup');
// кнопка закрыть попап
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
// кнопка открыть попап 
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
//   функция добавления класса для попап
const addPopupVisibility = function () {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;

}
const closePopupVisibility = function () {
    popupElement.classList.remove('popup_is-opened');
}
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
let profileText = profileInfo.querySelector('.profile__info-text');
// закрытие при нажатии на  overlay
// придумать как реализовать функцию после исправления ошибок !!
// const closePopupByClickOnOverlay = function (event) {
//     if (event.target !== event.currentTarget) {
//         return;
//     }
//     closePopupVisibility()
// }


// функция кнопки добавить 
function addProfileInfo(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileText.textContent = jobInput.value

    closePopupVisibility()

}
// событие
formElement.addEventListener('submit', addProfileInfo);
popupOpenButtonElement.addEventListener('click', addPopupVisibility);
popupCloseButtonElement.addEventListener('click', closePopupVisibility);
popupElement.addEventListener('click', closePopupByClickOnOverlay);