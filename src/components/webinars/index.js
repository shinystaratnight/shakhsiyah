import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import HeaderFour from '../header/headerFour';
import WebinarSection from './webinarSection';

const index = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb breadcrumbTitle="Upcoming Webinars" breadcrumbSubTitle="Upcoming Webinars" />
                <WebinarSection />
            </main>
            <Footer />
        </>
    );
};

export default index;