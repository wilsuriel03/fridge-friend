'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import navigation from '@/lib/constants';
import { Navigation } from '@/types/types';

import { useStore } from '@/store';

import { CgClose } from 'react-icons/cg';
import { logoWhite } from '@/assets/logos' 

import AuthButtons from '@/components/ui/buttons/AuthButtons';

const nav = navigation as Navigation;

export default function SideNav() {
  const { isNavOpen, toggleNav } = useStore();
  const pathname = usePathname();

  return (
    <Transition.Root show={isNavOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => toggleNav(false)}
      >
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-full">
                  <div className="flex h-full flex-col overflow-y-scroll bg-primary-dark py-4 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-between border-b border-b-white/30 pb-3">
                        <div className="flex items-center">
                          <Image
                            src={logoWhite}
                            alt="FridgeFriend Logo"
                            width={35}
                            height={35}
                          />
                          <Dialog.Title className="text-base font-medium leading-6 text-white ml-4">
                            FridgeFriend
                          </Dialog.Title>
                        </div>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-full text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-1"
                            onClick={() => toggleNav(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <CgClose className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 flex flex-col space-y-6 px-4 sm:px-6">
                      {nav.routes.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => toggleNav(false)}
                          className={`text-base leading-6 text-white whitespace-nowrap hover:underline hover:underline-offset-4 ${
                            pathname === item.href.pathname
                              ? 'underline underline-offset-4 decoration-secondary'
                              : ''
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="flex">
                        <AuthButtons
                          className="space-y-6 items-start"
                          layout="compact"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}