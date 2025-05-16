import Image from 'next/image';
import React from 'react';

import {
  SparklesIcon,
  VideoCameraIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  PlusIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon
} from '@heroicons/react/16/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image
          src="https://links.papareact.com/fqy"
          alt=''
          layout='fill'
          objectFit="contain"
        />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className='flex-1 bg-transparent outline-none'
        />
        <button type="submit" hidden />
      </form>

      <div className="items-center space-x-2 text-gray-500 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign in / Sign out button */}
      <div className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image
            objectFit="contain"
            src="https://links.papareact.com/23l"
            alt=""
            layout="fill"
          />
        </div>
        <p className='text-gray-400'>Sign In</p>
      </div>
    </div>
  )
}

export default Header;
