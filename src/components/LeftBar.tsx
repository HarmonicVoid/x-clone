import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const menuList = [
  {
    id: 1,
    name: 'Homepage',
    link: '/',
    icon: 'home.svg',
  },
  {
    id: 2,
    name: 'Explore',
    link: '/',
    icon: 'explore.svg',
  },
  {
    id: 3,
    name: 'Notification',
    link: '/',
    icon: 'notification.svg',
  },
  {
    id: 4,
    name: 'Messages',
    link: '/',
    icon: 'message.svg',
  },
  {
    id: 5,
    name: 'Bookmarks',
    link: '/',
    icon: 'bookmark.svg',
  },
  {
    id: 6,
    name: 'Jobs',
    link: '/',
    icon: 'job.svg',
  },
  {
    id: 7,
    name: 'Communities',
    link: '/',
    icon: 'community.svg',
  },
  {
    id: 8,
    name: 'Premium',
    link: '/',
    icon: 'logo.svg',
  },
  {
    id: 9,
    name: 'Profile',
    link: '/',
    icon: 'profile.svg',
  },
  {
    id: 10,
    name: 'More',
    link: '/',
    icon: 'more.svg',
  },
];

const LeftBar = () => {
  return (
    <div className='h-screen sticky flex flex-col justify-between pt-2 pb-8'>
      {/* LOGO MENU BUTTON */}
      <div className='flex flex-col text-lg items-center xl:items-start'>
        {/* LOGO */}
        <Link href='/' className='hover:bg-[#181818] p-2 rounded-full'>
          <Image alt='logo' src='icons/logo.svg' width={24} height={24} />
        </Link>
        {/* MENU LINK  */}
        <div className='flex flex-col gap-4'>
          {menuList.map((item) => (
            <Link
              className='p-2 rounded-full hover:bg-[#181818] flex items-center gap-4'
              href={item.link}
              key={item.id}
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className='hidden xl:inline'>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* USER */}
      <div className=''>user</div>
    </div>
  );
};

export default LeftBar;
