import logo from './images/header__logo.svg';
// import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип проекта Место"
        />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src="<%=require('./images/profile__avatar.png')%>"
              alt="Аватар путешественника"
            />
            <div className="profile__avatar-overlay" />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__button" aria-label="edit" type="button" />
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button className="profile__add-button" aria-label="add" type="button" />
        </section>
        <section className="photo-grid"></section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div className="popup edit-popup">
        <div className="popup__container">
          <button
            className="popup__close-icon edit-popup__close-icon"
            aria-label="close"
            type="button"
          />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_type_edit"
            name="edit-popup"
            noValidate=""
          >
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
            <button
              className="popup__button popup__save-button"
              aria-label="save"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup card-popup">
        <div className="popup__container">
          <button
            className="popup__close-icon card-popup__close-icon"
            aria-label="close"
            type="button"
          />
          <h2 className="popup__title card-popup__title">Новое место</h2>
          <form
            className="popup__form card-popup__form"
            name="card-popup"
            noValidate=""
          >
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
            <button
              className="popup__save-button card-popup__save-button"
              aria-label="save"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="image-popup popup">
        <div className="image-popup__container">
          <button
            className="image-popup__close-icon popup__close-icon"
            aria-label="close"
            type="button"
          />
          <div>
            <img
              className="image-popup__image"
              src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
              alt="изображение"
            />
            <p className="image-popup__caption">Архыз</p>
          </div>
        </div>
      </div>
      <div className="popup delete-popup">
        <div className="popup__container delete-popup__container">
          <button className="popup__close-icon" aria-label="close" type="button" />
          <h2 className="popup__title delete-popup__title">Вы уверены?</h2>
          <form
            className="popup__form delete-popup__form"
            name="delete-popup"
            noValidate=""
          >
            <button
              className="popup__save-button delete-popup__save-button"
              aria-label="save"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
        <div className="popup avatar-popup">
          <div className="popup__container avatar-popup__container">
            <button
              className="popup__close-icon"
              aria-label="close"
              type="button"
            />
            <h2 className="popup__title avatar-popup__title">Обновить аватар</h2>
            <form
              className="popup__form avatar-popup__form"
              name="avatar-popup"
              noValidate=""
            >
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
              <button
                className="popup__save-button avatar-popup__save-button"
                aria-label="save"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      <template className="card-template" />
    </div>
  );
}

export default App;
