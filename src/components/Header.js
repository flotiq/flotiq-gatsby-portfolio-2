import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const Header = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-32">
                        <div className="inset-y-0 flex items-center sm:hidden order-3">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center
                            p-2 rounded-md text-primary focus:outline-none focus:ring-2
                            focus:ring-inset focus:ring-indigo-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center
                        sm:items-stretch sm:justify-start order-2 sm:order-1"
                        >

                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/">
                                    <StaticImage src={'../assets/Logo.svg'} imgClassName={['h-10 md:h-14 w-auto']} width={65} height={64} alt="Logo" placeholder="none" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center order-1 sm:order-2">
                            <div className="flex-shrink-0">
                                <a
                                    href="mailto:hello@domain.com"
                                    className="
                                    italic
                                    font-archivo
                                    font-normal
                                    relative
                                    inline-flex
                                    items-center
                                    px-4
                                    py-2
                                    text-base
                                    underline
                                    uppercase
                                    hover:text-secondary"
                                >
                                    My works
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="pt-2 pb-4 space-y-1">
                        <p>Your menu items here...</p>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default Header;
