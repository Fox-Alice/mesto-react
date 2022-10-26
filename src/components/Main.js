import React from 'react';
import api from '../utils/Api';
import Card from './Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = React.useState(null);
    const [userDescription, setUserDescription] = React.useState(null);
    const [userAvatar, setUserAvatar] = React.useState(null);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUser(userName, userDescription, userAvatar)
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log('Error', err);
            })
        api.getInitialCards()
            .then((res) => {
                return setCards(res);
            })
            .catch((err) => {
                console.log('Error', err);
            })
    }, [])

    function handleEditAvatarClick() {
        const avatarPopup = document.querySelector('.avatar-popup');
        avatarPopup.classList.add('popup_opened')
    }

    function handleEditProfileClick() {
        const avatarPopup = document.querySelector('.edit-popup');
        avatarPopup.classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        const avatarPopup = document.querySelector('.card-popup');
        avatarPopup.classList.add('popup_opened')
    }

    onEditProfile = handleEditProfileClick;
    onAddPlace = handleAddPlaceClick;
    onEditAvatar = handleEditAvatarClick;


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img
                        className="profile__avatar"
                        src={userAvatar}
                        alt="Аватар путешественника"
                    />
                    <div onClick={onEditAvatar} className="profile__avatar-overlay" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button onClick={onEditProfile} className="profile__button" aria-label="edit" type="button" />
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} className="profile__add-button" aria-label="add" type="button" />
            </section>
            <section className="photo-grid">
                {cards.map((item) => (
                    <Card
                        item={item}
                        likes={item.likes}
                        name={item.name}
                        key={item._id}
                        link={item.link}
                        owner={item.owner}
                        onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    );
}

export default Main;