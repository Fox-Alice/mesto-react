import { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState(null);
    const [userDescription, setUserDescription] = useState(null);
    const [userAvatar, setUserAvatar] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
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
        onEditAvatar()
    }

    function handleEditProfileClick() {
        onEditProfile()
    }

    function handleAddPlaceClick() {
        onAddPlace()
    }

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