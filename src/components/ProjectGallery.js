import React from 'react';
import Carousel from 'react-multi-carousel';
import { Image } from 'flotiq-components-react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const CarouselNavigation = ({ goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="md:w-3/4 m-auto flex items-center justify-between font-sora underline font-light text-sm mt-5">
            <div className="cursor-pointer flex items-center" onClick={() => goToSlide(currentSlide - 1)}>
                <ArrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
                Previous work
            </div>
            <div className="cursor-pointer flex items-center" onClick={() => goToSlide(currentSlide + 1)}>
                Next work
                <ArrowRightIcon className="ml-3 h-5 w-5 text-primary" />
            </div>
        </div>
    );
};

const ProjectGallery = ({ gallery }) => (
    <Carousel
        draggable={false}
        infinite
        autoplay={false}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CarouselNavigation />}
    >
        {gallery.map((image) => (
            <Image url={image.localFile.publicURL} additionalClasses={['px-2']} key={image.id} />
        ))}
    </Carousel>
);

export default ProjectGallery;
