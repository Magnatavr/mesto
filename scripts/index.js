const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//  отметил попап   
const popupElement = document.querySelector('.popup');
const popupElementAdd = document.querySelector('.popup-add-form');
const popupView = document.querySelector('.popup-view');
// кнопка закрыть попап
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupAddCloseButtonElement = popupElementAdd.querySelector('.popup-add-form__close-button');
const popupViewCloseButton = popupView.querySelector('.popup-view__close-button');
// кнопка открыть попап 
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
//   функция добавления класса для попап
const addPopupVisibility = function () {
    if (this.classList.contains('profile__edit-button')) {
        popupElement.classList.add('popup_is-opened');
        nameInput.value = profileName.textContent;
        jobInput.value = profileText.textContent;

    } else if (this.classList.contains('profile__add-botton')) {
        popupElementAdd.classList.add('popup_is-opened');
    }
}
const closePopupVisibility = function () {
    popupElement.classList.remove('popup_is-opened');
    popupElementAdd.classList.remove('popup_is-opened');
    popupView.classList.remove('popup_is-opened');
}
// кнопка сердечка

// add-button
const profileAddBotton = document.querySelector('.profile__add-botton');
// Template
const cardTemplate = document.querySelector('.card-template').content;
const cardSection = document.querySelector('.elements')
initialCards.forEach(element => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
    const buttonLike = cardElement.querySelector('.element__like');
    const cardImg = cardElement.querySelector('.element__img');

    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle('element__like_active')
    })
    cardElement.querySelector('.element__title').textContent = element['name']
    cardImg.src = element['link']
    cardElement.querySelector('.element__remove-button').addEventListener('click', () => {
        cardElement.remove()
    })
    cardImg.addEventListener('click', () => {
        popupView.classList.add('popup_is-opened');
        popupView.querySelector('.popup-view__image').src = element['link'];
        popupView.querySelector('.popup-view__description').textContent = element['name'];
    })
    cardSection.append(cardElement);
});

// форма
let formElement = document.querySelector('.popup__form');
const formAddElement = popupElementAdd.querySelector('.popup__form');
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
const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupVisibility()
}


// функция кнопки добавить 
function addProfileInfo(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileText.textContent = jobInput.value

    closePopupVisibility()

}
//  функция добавления карточки
function addCard(evt) {
    evt.preventDefault();
    const cardName = formAddElement.querySelector('#placeName-input').value;
    const cardUrl = formAddElement.querySelector('#placeUrl-input').value

    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
    const buttonLike = cardElement.querySelector('.element__like');
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle('element__like_active')
    })
    cardElement.querySelector('.element__remove-button').addEventListener('click', () => {
        cardElement.remove()
    })
    cardElement.querySelector('.element__title').textContent = cardName
    cardElement.querySelector('.element__img').src = cardUrl
    const cardImg = cardElement.querySelector('.element__img');
    cardImg.addEventListener('click', () => {
        popupView.classList.add('popup_is-opened');
        popupView.querySelector('.popup-view__image').src = cardUrl 
        popupView.querySelector('.popup-view__description').textContent = cardName
    });

    popupElementAdd.querySelector('.popup__form').reset();
    cardSection.append(cardElement);
    closePopupVisibility()

}



// событие

formElement.addEventListener('submit', addProfileInfo);
formAddElement.addEventListener('submit', addCard);
popupOpenButtonElement.addEventListener('click', addPopupVisibility);
popupCloseButtonElement.addEventListener('click', closePopupVisibility);
profileAddBotton.addEventListener('click', addPopupVisibility);
popupAddCloseButtonElement.addEventListener('click', closePopupVisibility);
popupViewCloseButton.addEventListener('click', closePopupVisibility);
popupElement.addEventListener('mousedown', closePopupByClickOnOverlay);
popupView.addEventListener('mousedown', closePopupByClickOnOverlay);
popupElementAdd.addEventListener('mousedown', closePopupByClickOnOverlay);