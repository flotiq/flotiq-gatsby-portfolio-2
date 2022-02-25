import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['px-4 font-lora text-primary', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
