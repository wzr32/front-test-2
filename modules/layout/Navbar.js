import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import clsx from 'clsx';

const Navbar = () => {
  const router = useRouter();
  const actualRoute = router.asPath;

  const mainRoute = '/';

  return (
    <header className={
      clsx(
        mainRoute !== actualRoute && "h-full py-5 z-50 text-black text-sm",
        mainRoute === actualRoute && "h-full py-5 z-50 text-white text-sm",
      )
    }>
      <nav className="container mx-auto flex justify-between">
        <span>
          <Link href="/">
            logo
          </Link>
        </span>
        <ul className="flex justify-around w-6/12">
          <li className="ml-6 px-5 py-2 hover:bg-opacity-40 hover:bg-gray-500">
            <Link href="/about-us">
              About us
            </Link>
          </li>
          <li className="ml-6 px-5 py-2 hover:bg-opacity-40 hover:bg-gray-500">
            <Link href="#">Services</Link>
          </li>
          <li className="ml-6 px-5 py-2 hover:bg-opacity-40 hover:bg-gray-500">
            <Link href="#">Contact</Link>
          </li>
          <li className="ml-6 px-5 py-2 hover:bg-opacity-40 hover:bg-gray-500">
            <Link href="/users">Users</Link>
          </li>
          <li className="ml-6">
            <Link href="#">
              <button className="bg-white text-indigo-700	 px-5 py-2 rounded-full text-sm shadow-md">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

