import Image from 'next/image';
import Link from 'next/link';
import navigation from '@/lib/constants';
import { Navigation } from '@/types/types';

import { logoOrange } from '@/assets/logos';
import { CgArrowRight } from 'react-icons/cg';

import ExpandableText from '@/components/ui/texts/ExpandableText';

const nav = navigation as Navigation;

export default function Footer() {
  return (
    <footer
      className="bg-primary-dark flex-shrink-0"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-3 xl:px-0">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-5xl xl:max-w-none lg:grid-cols-2">
          <section className="grid grid-rows-footer items-start h-full">
            <div className="flex grid-rows-1 items-center ">
              <Image
                src={logoOrange}
                alt="FridgeFriend Logo"
                width={25}
                height={25}
              />
              <span className="ml-2 text-lg text-white font-bold">
                FridgeFriend
              </span>
            </div>

            <div className="grid-rows-2 pb-4">
              <ExpandableText
                text="Connecting Communities, Nourishing Neighbors: At FridgeFriend, we believe in the power of shared resources to strengthen communities and alleviate hunger. Our mission is to foster unity and mutual aid in Southern Louisiana by making community fridges and pantries accessible to all. We strive to make it simple for locals to find, contribute to, and benefit from these vital community assets. With FridgeFriend, it's easier than ever to give what you can and take what you need. Together, we can make a difference—one meal, one fridge, one community at a time."
                maxLength={300}
                twClass="text-white text-sm"
              />
            </div>

            <nav className=" grid-rows-3">
              <h3 className="text-lg font-semibold tracking-tight text-white mb-2 underline underline-offset-4 decoration-secondary lg:hidden">
                Quick Links
              </h3>
              <ul
                role="list"
                className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0"
              >
                {nav.routes.map((item) => (
                  <li
                    key={item.name}
                    className="text-xs text-white/50 hover:text-white whitespace-nowrap"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section className="grid grid-rows-footer items-center h-full">
            <div className="grid-rows-1">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Subscribe to our newsletter <span aria-hidden="true">↓</span>
              </h3>
              <p className="text-xs text-white/50 ">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>

            <div className="grid-rows-2">
              <form>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="flex rounded-full bg-white py-1.5 pr-2 focus-within:ring-2 focus-within:ring-primary-dark">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="-my-1.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    className="inline-flex justify-center rounded-3xl bg-secondary p-1.5 md:py-2.5 md:px-3.5 text-sm font-semibold text-white hover:bg-secondary-light focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary active:text-white/70"
                    type="submit"
                  >
                    <span className="sr-only md:not-sr-only">Subscribe</span>
                    <span className="md:hidden">
                      <CgArrowRight className="h-6 w-6" />
                    </span>
                  </button>
                </div>
              </form>
              <div className="flex py-3 space-x-2 justify-center items-center lg:justify-end">
                {nav.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/50 hover:text-white"
                    target="_blank"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon ? (
                      <item.icon
                        className="h-8 w-8 lg:h-5 lg:w-5"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex grid-rows-3 border-t border-white/50 lg:border-none justify-center lg:justify-end py-3 lg:py-0">
              <p className="text-xs leading-4 text-white/50">
                &copy; {new Date().getFullYear()} FridgeFriend. All rights
                reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
