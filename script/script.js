const popupProfile = document.querySelector('#popup-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');

profileEditButton.addEventListener('click', function popupProfileOpen() {
  popupProfile.classList.add('popup_opened');
});

profileCloseButton.addEventListener('click', function popupProfileClose() {
  popupProfile.classList.remove('popup_opened');
});

const popupPlace = document.querySelector('#popup-place');
const placeAddButton = document.querySelector('.profile__add-button');
const placeCloseButton = popupPlace.querySelector('.popup__close-button');

placeAddButton.addEventListener('click', function() {
  popupPlace.classList.add('popup_opened');
});

placeCloseButton.addEventListener('click', function() {
  popupPlace.classList.remove('popup_opened');
});
