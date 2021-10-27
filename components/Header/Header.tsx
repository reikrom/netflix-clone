import React, { useState } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';
import { Input } from '@mui/material';
import MobileNavigation from 'components/menu/MobileNavigation';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className={header}>
                <div className="Header__menuIcon">
                    <MenuIcon onClick={() => setIsOpen(!isOpen)} className={menuIcon} />
                </div>
                <Logo />

                <Input
                    id="search"
                    disableUnderline
                    className={searchInput}
                    size="small"
                    placeholder="Search"
                    type="Search"
                />
            </div>
            <div className="h-0 relative">
                <MobileNavigation isOpen={isOpen} />
                <div id="backdrop" className="bg-red opacity-20 h-screen w-screen fixed left-0 top-0 z-10" />
            </div>
        </div>
    );
};

export default Header;

// tailwind classnames
const header = 'flex items-center px-5 h-11 bg-dark-4 z-20 relative';
const searchInput = 'text-light-4 border border-light-4 py-1 px-2 w-32 ml-auto bg-dark-3 h-8';
const menuIcon = 'text-light-1 w-8 h-8';
