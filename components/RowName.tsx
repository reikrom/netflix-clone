import React from 'react';
import c from './RowName.module.scss';

interface Props {
    title: string;
}

const RowName = ({ title }: Props) => {
    return <h2 className={c.rowName}>{title}</h2>;
};

export default RowName;
