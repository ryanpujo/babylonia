import { Transition, Popover } from '@headlessui/react';
import {
  ChatIcon,
  CreditCardIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import axios from 'axios';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '../helpers/window-resize';
import { RootState } from '../store';
import { headerAction } from '../store/header';
import { productsAction } from '../store/products';
type Navs = {
  categories: JSX.Element;
  messagess: JSX.Element;
  cart: JSX.Element;
  orders: JSX.Element;
};
const Navs = () => {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const searchParameter = useSelector(
    (state: RootState) => state.header.searchParameter
  );
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
  const search = async () => {
    let res;
    if (searchParameter === '') {
      res = await axios.get(`https://dummyjson.com/products?limit=100`);
      dispatch(productsAction.setProducts(res.data.products));
      return;
    }
    res = await axios.get(
      `https://dummyjson.com/products/search?q=${searchParameter}&limit=100`
    );
    dispatch(productsAction.setProducts(res.data.products));
  };
  return (
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
              <h3 className="group-hover:text-blue-500 my-auto">{nav}</h3>
            </a>
          </Link>
        ))}
        <div className="w-min flex p-2 bg-gray-200 rounded-lg">
          <Link className="my-auto" href={`/searchpage`}>
            <a>
              <SearchIcon onClick={search} className="h-4 w-4 my-auto" />
            </a>
          </Link>
          <input
            className="bg-gray-200 lg:w-64 h-5 pl-2 focus:outline-none"
            type="text"
            value={searchParameter}
            onChange={async (e) => {
              e.preventDefault();
              dispatch(headerAction.search(e.target.value));
              search();
            }}
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
  );
};

export default Navs;
