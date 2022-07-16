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
const popupEditProfile = document.querySelector('.popup');
const popupAddCard = document.querySelector('.popup-add-form');
const popupView = document.querySelector('.popup-view');
// кнопка закрыть попап
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup-add-form__close-button');
const popupViewCloseButton = popupView.querySelector('.popup-view__close-button');
// кнопка открыть попап 
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
//   функция добавления класса для попап
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

function closePopupVisibility(popup) {
    popup.classList.remove('popup_is-opened');


}
// кнопка сердечка

// add-button
const profileAddBotton = document.querySelector('.profile__add-botton');
// Template
const cardTemplate = document.querySelector('.card-template').content;
const cardSection = document.querySelector('.elements')
initialCards.reverse().forEach(element => {
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
const formEditProfile = document.querySelector('.popup__form');
const formAddCard = popupAddCard.querySelector('.popup__form');
// кнопка имя
const nameInput = formEditProfile.querySelector('.popup__input_data_name');
// кнопка профессия 
const jobInput = formEditProfile.querySelector('.popup__input_data_about');

// отметил профиль блок
const profileInfo = document.querySelector('.profile__info');
// кнопка добавить
const buttonAdd = popupEditProfile.querySelector('.popup__button')
const profileName = profileInfo.querySelector('.profile__info-name');
const profileText = profileInfo.querySelector('.profile__info-text');
// закрытие при нажатии на  overlay
function closePopupByClickOnOverlay(event, popup) {
    if (event.target !== event.currentTarget && !event.target.classList.contains('popup__close-button')) {
        return;
    }
    closePopupVisibility(popup);
}


// функция кнопки добавить 
function addProfileInfo(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileText.textContent = jobInput.value

    closePopupVisibility(popupEditProfile)

}
//  функция добавления карточки
function createCard(fields) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true)
    const buttonLike = cardElement.querySelector('.element__like');
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle('element__like_active')
    })
    cardElement.querySelector('.element__remove-button').addEventListener('click', () => {
        cardElement.remove()
    })
    cardElement.querySelector('.element__title').textContent = fields.cardName;
    cardElement.querySelector('.element__img').src = fields.cardUrl
    cardElement.querySelector('.element__img').alt = fields.cardName
    const cardImg = cardElement.querySelector('.element__img');
    cardImg.addEventListener('click', () => {
        openPopup(popupView)
        popupView.querySelector('.popup-view__image').src = fields.cardUrl
        popupView.querySelector('.popup-view__image').alt = fields.cardName
        popupView.querySelector('.popup-view__description').textContent = fields.cardName
    });
    return cardElement;
}

function addCard(fields) {
    // evt.preventDefault();
    const card = createCard(fields);
    cardSection.prepend(card);
}
// событие

formEditProfile.addEventListener('submit', addProfileInfo);
formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let inputFields = {
        'cardName': formAddCard.querySelector('#placeName-input').value,
        'cardUrl': formAddCard.querySelector('#placeUrl-input').value
    };
    addCard(inputFields);
    closePopupVisibility(popupAddCard);
});
popupOpenButtonElement.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
});

profileAddBotton.addEventListener('click', () => {
    formAddCard.reset();
    openPopup(popupAddCard);
});

popupEditProfile.addEventListener('mousedown', (evt) => {
    closePopupByClickOnOverlay(evt, popupEditProfile);
});
popupView.addEventListener('mousedown', (evt) => {
    closePopupByClickOnOverlay(evt, popupView);
});
popupAddCard.addEventListener('mousedown', (evt) => {
    closePopupByClickOnOverlay(evt, popupAddCard);
});