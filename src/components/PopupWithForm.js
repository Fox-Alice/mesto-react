import React from 'react'

function PopupWithForm(props) {
    if (props.active) {

        return (
            <div className={`popup ${props.name}-popup ${props.active && 'popup_opened'}`}>
                <div className="popup__container">
                    <button
                        onClick={props.onClose}
                        className={`popup__close-icon ${props.name}-popup__close-icon`}
                        aria-label="close"
                        type="button"
                    />
                    <h2 className="popup__title">{props.title}</h2>
                    <form
                        className={`popup__form popup__form_type_${props.name}`}
                        name={`${props.name}-popup`}
                        noValidate=""
                    >
                        {props.children}
                        <button
                            className="popup__button popup__save-button"
                            aria-label="save"
                            type="submit"
                        >
                            {props.buttonText}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PopupWithForm;