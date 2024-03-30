import React from 'react';
import Main from '@/components/HomeDetails/main';
import Promo from '@/components/HomeDetails/promo';
import AboutFoods from '@/components/HomeDetails/aboutFoods';
import MenuPreview from '@/components/HomeDetails/menuPreview';

export default function page() {
    return (
        <>
            <Main />
            <Promo />
            <AboutFoods />
            <MenuPreview />
        </>
    );
}
