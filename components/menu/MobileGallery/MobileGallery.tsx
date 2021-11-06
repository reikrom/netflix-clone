import RowName from 'components/RowName';
import WatchTitle from 'components/WatchTitle';
import { DefineLater } from 'Models/Placeholder';
import React from 'react';

interface Props {
    title: string;
    watchTitles: DefineLater;
}

const MobileGallery = ({ title, watchTitles }: Props) => {
    if (watchTitles === undefined) return null;
    return (
        <div>
            <RowName title={title} />
            <div className="mobileMultiRow">
                {watchTitles.map((item: DefineLater, index: number) => (
                    <WatchTitle key={index} href={item.href} />
                ))}
            </div>
        </div>
    );
};

export default MobileGallery;
