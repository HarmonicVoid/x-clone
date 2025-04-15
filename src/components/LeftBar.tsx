import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LeftBar = () => {
  return (
    <div className=''>
      {/* LOGO MENU BUTTON */}
      <div className=''>
        {/* LOGO */}
        <Link href='/'>
          <Image alt='logo' src='icons/logo.svg' width={24} height={24} />
        </Link>
      </div>
      {/* USER */}
      <div className=''>user</div>
    </div>
  );
};

export default LeftBar;
