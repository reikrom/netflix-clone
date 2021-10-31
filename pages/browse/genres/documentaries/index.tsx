import MobileGallery from 'components/menu/MobileGallery/MobileGallery';
import { imgArr } from 'Models/Placeholder';
import React from 'react';

interface Props {}

const index = (props: Props) => {
    return <MobileGallery gallery={{ title: 'Documentaries', watchTitles: imgArr }} />;
};

export default index;