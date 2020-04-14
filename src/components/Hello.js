import React from 'react';
import { useTranslation } from 'react-i18next'


const Hello = () => {

    const { t } = useTranslation();

    return (
        <div>
            {t('hello.label')}
        </div>
    )

}

export default Hello;
