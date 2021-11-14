import { DefineLater, imgArr100 } from 'Models/Placeholder';
import React from 'react';
import MobileGallery from '../components/MobileGalleryLayout';

interface Props {
    title: string;
    watchTitles: DefineLater;
}

const mylist = ({ title, watchTitles }: Props) => {
    return <MobileGallery title={title} watchTitles={watchTitles} />;
};

export async function getStaticProps() {
    return {
        props: {
            title: 'My List',
            watchTitles: imgArr100,
        },
    };
}

export default mylist;
