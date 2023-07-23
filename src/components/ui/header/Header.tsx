'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navigation from '@/lib/constants';
import { Navigation, NavigationItem } from '@/types/types';

import { useStore } from '@/store';

import { logoGreen } from '@/assets/logos';
import { CgMenuLeft } from 'react-icons/cg';

import AuthButtons from '@/components/ui/buttons/AuthButtons';
import SideNav from './SideNav';

const nav = navigation as Navigation;

const LinkToNavItem = ({
  item,
  pathname,
}: {
  item: NavigationItem;
  pathname: string;
}) => {
  return (
    <Link
      key={item.name}
      href={item.href}
      className={`relative inline-flex items-center text-sm leading-6 text-light-text whitespace-nowrap hover:text-primary-dark ${
        pathname === item.href.pathname ? 'text-primary-dark' : ''
      }`}
    >
      {item.name}
      {pathname === item.href.pathname && (
        <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-t-2xl bg-secondary" />
      )}
    </Link>
  );
};

export default function Header() {
  const halfNavLength = Math.ceil(nav.routes.length / 2); // calculate the middle index of the nav links
  const navFirstHalf = nav.routes.slice(0, halfNavLength); // first half of the nav links
  const navSecondHalf = nav.routes.slice(halfNavLength); // second half of the nav links

  const pathname = usePathname();

  const { isNavOpen, toggleNav } = useStore();

  return (
    <header className="w-full absolute top-0 z-30 lg:relative lg:z-auto bg-transparent lg:bg-white lg:transition-colors lg:shadow-sm flex-shrink-0">
      <nav className="p-4 grid grid-cols-2 lg:grid-cols-[1fr,auto,1fr] items-center justify-between">
        <div className="flex col-start-1 lg:col-start-2">
          <div className="hidden lg:flex space-x-8 items-center">
            {navFirstHalf.map((item) => (
              <LinkToNavItem key={item.name} item={item} pathname={pathname} />
            ))}
          </div>

          <Link href="/" className="flex justify-center lg:justify-self-center">
            <Image
              src={logoGreen}
              alt="FridgeFriend Logo"
              width={25}
              height={25}
              className="cursor-pointer lg:mx-8"
            />
            <span className="block lg:hidden ml-4 font-bold">FridgeFriend</span>
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            {navSecondHalf.map((item) => (
              <LinkToNavItem key={item.name} item={item} pathname={pathname} />
            ))}
          </div>
        </div>

        <AuthButtons
          className="col-start-3 justify-self-end space-x-4"
          layout="default"
        />

        <button
          onClick={() => toggleNav(true)}
          className={`col-start-2 h-10 w-10 rounded-full flex items-center justify-center justify-self-end hover:bg-white hover:bg-opacity-40 lg:hidden ${
            isNavOpen ? 'hidden' : ''
          }`}
        >
          <span className="sr-only">Open Side Nav</span>
          <CgMenuLeft size={24} />
        </button>
      </nav>
      <SideNav />
    </header>
  );
}
