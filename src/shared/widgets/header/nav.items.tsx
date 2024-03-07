import { navItems } from '@/app/configs/constants';
import Link from 'next/link';
import React from 'react';

function NavItems() {
  return (
    <div>
      <div className="w-full hidden md:flex items-center">
        {navItems.map((i:NavItems, index: number) => (
          <Link key={index} href={'/'} className="px-5 text-lg">
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavItems;
