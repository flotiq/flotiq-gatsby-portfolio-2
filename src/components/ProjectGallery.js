import React from 'react';
import Carousel from 'react-multi-carousel';
import { Image } from 'flotiq-components-react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

const responsive = {
    desktop: {
        breakpoint: { max: 3840, min: 1200 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1200, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    },
};
const CarouselNavigation = ({ goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="flex items-center justify-between font-sora underline font-light text-sm mt-5">
            <div
                className="cursor-pointer flex items-center bg-secondary px-7 py-3 rounded-full"
                onClick={() => goToSlide(currentSlide - 1)}
            >
                <ArrowLeftIcon className="h-6 w-6 text-white" />
            </div>
            <div
                className="cursor-pointer flex items-center bg-secondary px-7 py-3 rounded-full"
                onClick={() => goToSlide(currentSlide + 1)}
            >
                <ArrowRightIcon className="h-6 w-6 text-white" />
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
            <div key={image.id} className="px-1">
                <Image url={image.localFile.publicURL} rounded="3xl" />
            </div>
        ))}
    </Carousel>
);

export default ProjectGallery;
