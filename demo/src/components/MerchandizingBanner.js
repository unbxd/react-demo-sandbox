import React from 'react';

import { Banners } from '../../public/dist/js/main';

export const BannerItemComponent = ({ itemData }) => {
    const { imageUrl, landingUrl } = itemData;
    return (
        <a href={landingUrl} className="UNX-banner__item">
            <img src={imageUrl} />
        </a>
    );
};

const MerchandizingBanner = () => {
    return <Banners />;
};

export default MerchandizingBanner;
