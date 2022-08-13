import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navs from './navs';

const NavContainer = () => {
  return (
    <div>
      <div className="bg-white">
        <Popover
          className={
            'px-4 max-w-7xl mx-auto lg:px-0 lg:py-0 py-2 lg:flex justify-between'
          }
        >
          {({ open }) => (
            <>
              <div className="flex lg:mr-8">
                <Link href={'/homepage'}>
                  <a className="my-auto h-10 w-24">
                    <Image
                      className="object-contain cursor-pointer"
                      src={'/archlinux-ar21.svg'}
                      height={40}
                      width={90}
                      alt="logo"
                    />
                  </a>
                </Link>

                <Popover.Button
                  className={
                    'flex-grow justify-end flex focus:outline-none my-auto lg:hidden'
                  }
                >
                  <MenuIcon
                    className={`h-4 w-4 ${open ? 'transform rotate-90' : ''}`}
                  />
                </Popover.Button>
              </div>
              <Navs />
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default NavContainer;
