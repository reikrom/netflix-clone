import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo-shadow2x.png';
import { Menu } from '@mui/icons-material';
import { Input } from '@mui/material';

const header = 'flex items-center px-5';

const Header = () => {
    return (
        <div className={`${header} h-11`}>
            <Menu className="text-light-1 w-8 h-8" />
            <div className="logo h-6 pl-4">
                <Image src={Logo} height="24" width="84" />
            </div>

            <Input
                id="search"
                disableUnderline
                className="text-light-4 border border-light-4 py-1 px-2 w-32 ml-auto bg-dark-3 h-8"
                size="small"
                placeholder="Search"
                type="Search"
            />
        </div>
    );
};

export default Header;
