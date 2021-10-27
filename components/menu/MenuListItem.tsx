import React from 'react';

interface Props {
    text?: string;
    children?: any;
}

const MenuListItem = ({ text, children }: Props) => {
    return (
        <li>
            {children}
            {text}
        </li>
    );
};

export default MenuListItem;
