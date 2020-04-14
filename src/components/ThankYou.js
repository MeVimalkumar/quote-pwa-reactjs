import React from 'react';
import { useTranslation } from 'react-i18next'


const ThankYou = () => {

    const { t } = useTranslation();

    return (
        <div>
            {t('thankyou.label')}
        </div>
    )

}

export default ThankYou;
