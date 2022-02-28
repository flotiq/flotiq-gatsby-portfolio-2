import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['px-4 font-lora text-primary', ...additionalClass].join(' ')}>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
