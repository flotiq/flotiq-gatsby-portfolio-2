import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['px-4 font-lora text-primary', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
