import React from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState(null)

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setselectedCard(null)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onAddPlace={() => setIsAddPlacePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
        onCardClick={(data) => setselectedCard(data)}
      />
      <Footer />
      <PopupWithForm
        active={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
        name="edit"
        title="Редактировать профиль">
        <fieldset className="popup__border">
          <input
            id="name-input"
            type="text"
            name="name"
            className="popup__form-item popup__form-item_type_name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span
            id="name-input-error"
            className="name-input-error popup__input-error"
          >
            ошибка
          </span>
          <input
            id="job-input"
            type="text"
            name="about"
            className="popup__form-item popup__form-item_type_job"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span
            id="job-input-error"
            className="job-input-error popup__input-error"
          />
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        active={isAddPlacePopupOpen}
        setActive={setIsAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Создать'
        name="card"
        title="Новое место">
        <fieldset className="popup__border card-popup__border">
          <input
            id="title-input"
            type="text"
            name="name"
            className="popup__form-item card-popup__form-item popup__form-item_type_title"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span
            id="title-input-error"
            className="title-input-error popup__input-error"
          />
          <input
            id="link-input"
            type="url"
            name="link"
            className="popup__form-item card-popup__form-item popup__form-item_type_link"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span
            id="link-input-error"
            className="link-input-error popup__input-error"
          />
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        active={isEditAvatarPopupOpen}
        setActive={setIsEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
        name="avatar"
        title="Обновить аватар">
        <fieldset className="popup__border avatar-popup__border">
          <input
            id="avatar-input"
            type="url"
            name="avatar"
            className="popup__form-item avatar-popup__form-item popup__form-item_type_link"
            placeholder="Ссылка на изображение"
            required=""
          />
          <span
            id="avatar-input-error"
            className="avatar-input-error popup__input-error"
          />
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        buttonText='Да'
        name="delete"
        title="Вы уверены?" />
      <ImagePopup
        item={selectedCard}
        onClose={closeAllPopups} />
      <template className="card-template" />
    </div>
  );
}

export default App;