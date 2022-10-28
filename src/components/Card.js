import React from 'react';
import cardRemoveButton from '../images/card-remove-button.svg';

function Card({ item, onCardClick }) {

    function handleClick() {
        onCardClick(item);
    }

    return (
        <div className="card">
            <button className="card__remove-button" aria-label="remove" type="button">
                <img
                    className="card__remove-image"
                    src={cardRemoveButton}
                    alt="кнопка удалить"
                />
            </button>
            <img
                onClick={handleClick}
                className="card__image"
                src={item?.link}
                alt={item?.name}
            />
            <div className="card__caption">
                <h2 className="card__title">{item?.name}</h2>
                <div className="card__like-container">
                    <button className="card__like" aria-label="like" type="button" />
                    <span className="card__like-counter">{item?.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;