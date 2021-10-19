import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo-shadow2x.png';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Input } from '@mui/material';
import MobileNavigation from 'components/menu/MobileNavigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${header} h-11`}>
            <div className="Header__menuIcon border border-red relative">
                <MenuIcon onClick={() => setIsOpen(!isOpen)} className="text-light-1 w-8 h-8" />
                <div
                    id="header-navigation-slider-background"
                    className="bg-red opacity-20 h-screen w-screen absolute -left-5 z-10"
                />
                <MobileNavigation isOpen={isOpen} />
            </div>
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

// tailwind classnames
const header = 'flex items-center px-5';
