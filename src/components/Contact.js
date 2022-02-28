import React from 'react';
import { Image, Header, Button } from 'flotiq-components-react';
import SocialMediaIcons from './SocialMediaIcons';

const Contact = ({
    additionalClass,
    headerText1,
    headerText2,
    headerText3,
    headerText4,
    nameInputPlaceholder,
    messageInputPlaceholder,
    buttonLabel,
    contactFormImage,
}) => (
    <div className={['pt-5', ...additionalClass].join(' ')}>
        <SocialMediaIcons
            additionalClass={['flex-wrap sm:flex-nowrap space-x-1 sm:space-x-2 justify-center md:justify-between']}
            iconAdditionalClass={['']}
            iconImageAdditionalClass={['!h-6 !w-6']}
        />
        <div className="relative mt-8">
            <Image url={contactFormImage} additionalClasses={['w-full !rounded-3xl']} />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br
            from-white/75 to-transparent p-5 font-archivo uppercase tracking-widest"
            >
                <Header text={headerText1} additionalClasses={['!p-0 !text-2xl !leading-none']} />
                <Header text={headerText2} additionalClasses={['!p-0 !text-2xl !leading-none']} />
                <Header text={headerText3} additionalClasses={['!p-0 !text-2xl !leading-none']} />
                <Header text={headerText4} additionalClasses={['!p-0 !text-2xl !leading-none']} />
            </div>
        </div>
        <form action="#" method="POST" className="font-archivo space-y-2 flex flex-col mt-2">
            <div className="space-y-2 ">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full py-4 px-5 placeholder-gray bg-light-gray
                    border-none uppercase italic rounded-full font-light"
                    placeholder={nameInputPlaceholder}
                />
                <textarea
                    id="message"
                    name="message"
                    rows={1}
                    className="block w-full py-4 px-5 placeholder-gray bg-light-gray
                    border-none uppercase italic rounded-full font-light"
                    placeholder={messageInputPlaceholder}
                    defaultValue=""
                />
            </div>
            <div className="text-right">
                <Button
                    label={buttonLabel}
                    rounded="none"
                    size="lg"
                    additionalClasses={['flex justify-center !py-4 !px-10 mt-3 uppercase '
                    + '!text-base !font-light text-white bg-secondary w-full rounded-full']}
                />
            </div>
        </form>
    </div>
);

export default Contact;
