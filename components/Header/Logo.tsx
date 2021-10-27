import React from 'react';
import Image from 'next/image';
import LogoImg from '../../public/logo-shadow2x.png';

interface Props {}

const Logo = (props: Props) => {
    return (
        <div className="logo h-6 pl-4">
            <Image src={LogoImg} height="24" width="84" />
        </div>
    );
};

export default Logo;
