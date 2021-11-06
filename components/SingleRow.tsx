import { DefineLater } from 'Models/Placeholder';
import React from 'react';
import RowName from './RowName';
import WatchTitle from './WatchTitle';

interface Props {
    title: string;
    watchTitles: DefineLater;
}

const SingleRow = ({ watchTitles, title }: Props) => {
    return (
        <div className="singleRow">
            <RowName title={title} />
            <div className="inlineRow overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hidden">
                {watchTitles.map(({ watchTitle }: DefineLater, index: number) => (
                    <WatchTitle key={index} href={watchTitle?.href} />
                ))}
            </div>
        </div>
    );
};

export default SingleRow;
