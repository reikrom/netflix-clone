import MobileGallery from 'components/menu/MobileGallery/MobileGallery';
import { DefineLater, imgArr } from 'Models/Placeholder';
import React from 'react';
import { getPageTitle, genres } from 'utils/routes';

interface Props {
    title: string;
    watchTitles: string[];
}

const Page = ({ title, watchTitles }: Props) => {
    return <MobileGallery title={title} watchTitles={watchTitles} />;
};

export async function getStaticPaths() {
    const genreParams = genres.map((g) => ({
        params: {
            id: g.id.toString(),
            title: g.title,
        },
    }));
    return {
        paths: genreParams,
        fallback: true,
    };
}

export async function getStaticProps({ params: { id } }: DefineLater) {
    console.log(id, 'id');
    const pageTitle = getPageTitle(id);

    return {
        props: {
            title: pageTitle,
            watchTitles: imgArr,
        },
    };
}

export default Page;
