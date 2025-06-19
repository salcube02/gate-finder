'use client';

import { useTranslations } from 'next-intl';
import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    const t = useTranslations('home');

    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">{t('findYourDreamHome')}</h2>
                <p className="fz18 color-white">
                    {t('fromAsLowAsOffer')}
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
