import React from 'react';
import { Card, Button } from 'flotiq-components-react';

const ProjectCard = ({ name, excerpt, image }) => (
    <Card
        bordered={false}
        horizontal
        rounded="none"
        additionalClasses={['flex mb-5 !bg-transparent']}
    >
        <Card.Img
            src={image}
            alt={name}
            additionalContainerClasses={['basis-full md:basis-1/2 xl:basis-3/5']}
            additionalClasses={['w-full rounded-3xl']}
        />
        <Card.Body additionalClasses={['basis-full md:basis-1/2 xl:basis-2/5']}>
            <div>
                <Card.Title additionalClasses={['font-archivo uppercase tracking-widest']}>
                    {name}
                </Card.Title>
                <Card.Text additionalClasses={['']}>
                    <span
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                        className="line-clamp-5 lg:line-clamp-3 lg:line-clamp-4 font-lora text-sm
                        xl:text-base uppercase italic mb-10 lg:mb-5 xl:mb-10"
                    />
                </Card.Text>
                <div className="relative mr-5 w-fit">
                    <Button
                        variant="secondary"
                        label="Explore"
                        size="lg"
                        additionalClasses={['font-archivo font-normal '
                        + 'uppercase !text-base tracking-wide md:-ml-20 relative z-[1] '
                        + '!py-5 lg:!py-3 xl:!py-5']}
                    />
                    <div className="absolute -right-12 xl:-right-16 bottom-0
                    bg-light-gray w-full py-8 lg:py-6 xl:py-8 rounded-full"
                    />
                </div>
            </div>
        </Card.Body>
    </Card>
);

export default ProjectCard;
