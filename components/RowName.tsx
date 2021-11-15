import React from 'react';

interface Props {
    title: string;
}

const RowName = ({ title }: Props) => {
    return (
        <h2
            className="rowName
                text-xl
                font-bold
                mb-3
                text-primary-gray"
        >
            {title}
        </h2>
    );
};

export default RowName;
