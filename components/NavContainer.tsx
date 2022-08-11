import { Popover, Transition } from '@headlessui/react';
import {
  ChatIcon,
  CreditCardIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { useWindowSize } from '../helpers/window-resize';
type Navs = {
  categories: JSX.Element;
  messagess: JSX.Element;
  cart: JSX.Element;
  orders: JSX.Element;
};
const NavContainer = () => {
  const windowSize = useWindowSize();
  const navs = {
    categories: (
      <MenuIcon className="h-4 w-4 my-auto group-hover:text-blue-500" />
    ),
    messagess: (
      <ChatIcon className="h-4 w-4 my-auto group-hover:text-blue-500" />
    ),
    cart: (
      <ShoppingCartIcon className="h-4 w-4 my-auto group-hover:text-blue-500" />
    ),
    orders: (
      <CreditCardIcon className="h-4 w-4 my-auto group-hover:text-blue-500" />
    ),
  };
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
                <Image
                  className="object-contain"
                  src={'/archlinux-ar21.svg'}
                  height={40}
                  width={90}
                  alt="logo"
                />

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
              <Transition
                show={windowSize && windowSize.width <= 1024 ? undefined : true}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className={
                    'absolute lg:flex bg-white z-10 lg:p-0 flex-grow justify-between lg:static my-4 lg:space-y-0 space-y-2 right-2 p-2 rounded-lg'
                  }
                >
                  {Object.keys(navs).map((nav) => (
                    <Link key={nav} href={`/${nav}`} className="">
                      <a className="flex group lg:space-x-1">
                        {navs[nav as keyof Navs]}
                        <h3 className="group-hover:text-blue-500 my-auto">
                          {nav}
                        </h3>
                      </a>
                    </Link>
                  ))}
                  <div className="w-min flex p-2 bg-gray-200 rounded-lg">
                    <SearchIcon className="h-4 w-4 my-auto" />
                    <input
                      className="bg-gray-200 lg:w-64 h-5 focus:outline-none"
                      type="text"
                    />
                  </div>
                  <div className="w-32 border-lightBlue p-1 border-2 rounded-lg flex justify-center">
                    <h3 className="my-auto">Login</h3>
                  </div>
                  <div className="w-32 border-lightBlue bg-lightBlue p-1 border-2 rounded-lg flex justify-center">
                    <h3 className="my-auto text-white">Register</h3>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default NavContainer;
