import { DefineLater } from 'Models/Placeholder';
import React from 'react';
import c from './MobileGallery.module.scss';

interface Props {
    title: string;
    watchTitles: DefineLater;
}

const MobileGallery = ({ title, watchTitles }: Props) => {
    if (watchTitles === undefined) return null;
    return (
        <div>
            <h2 className={c.rowName}>{title}</h2>
            <div className="mobileMultiRow">
                {watchTitles.map((item: DefineLater, index: number) => (
                    <a key={index} className={c.watchTitle} href={item.href}>
                        <div style={{ backgroundImage: 'url("https://via.placeholder.com/150")' }} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MobileGallery;
