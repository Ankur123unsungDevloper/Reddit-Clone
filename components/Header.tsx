import { ChevronDownIcon, HomeIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react'

function Header() {
  return (
    <div className="sticky top-0 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image
          src="https://links.papareact.com/fqy"
          alt=''
          layout='fill'
          objectFit="contain"
        />
      </div>
      <div className="mx-7 flex items-center">
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  )
}

export default Header;
