import React from 'react';
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div onChange={changeLanguage}>
            <input type="radio" value="en" name="language" defaultChecked /> English
            <input type="radio" value="de" name="language" /> German
            <input type="radio" value="fr" name="language" /> French
            <input type="radio" value="es" name="language" /> Spanish
        </div>
    )

}

export default LanguageSelector;
