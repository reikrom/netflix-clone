import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo-shadow2x.png';
import { Menu } from '@mui/icons-material';

const Header = () => {
    return (
        <div style={{ border: '1px solid red' }}>
            <Menu />
            <Image src={Logo} height="24" width="84" />
        </div>
    );
};

export default Header;
