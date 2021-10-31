import { DefineLater } from 'Models/Placeholder';
import React from 'react';
import c from './MobileGallery.module.scss';

interface Props {
    gallery: {
        title: string;
        watchTitles: DefineLater;
    };
}

const MobileGallery = ({ gallery }: Props) => {
    return (
        <div>
            <h2 className={c.rowName}>{gallery.title}</h2>
            <div className="mobileMultiRow">
                {gallery.watchTitles.map((item: DefineLater) => (
                    <a className={c.watchTitle} href={item.href}>
                        <div style={{ backgroundImage: 'url("https://via.placeholder.com/150")' }} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MobileGallery;
