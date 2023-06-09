import React from 'react';
import Breadcrumb from './breadcrumbHalaqah';
import Footer from '../footer/footer';
import HeaderFour from '../header/header';
import ShopSectionMain from './shopSectionMain';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Family Halaqah" breadcrumbSubTitle="Family Halaqah" />
                <ShopSectionMain />
            </main>
            <Footer />
        </>
    );
};

export default index;