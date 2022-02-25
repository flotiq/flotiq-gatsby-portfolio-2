import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-playfair', ...additionalClass].join(' ')}>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
