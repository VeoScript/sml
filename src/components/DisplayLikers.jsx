import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function DisplayLikers({ likes }) {
  return (
    <div className="-mt-1">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="font-normal text-[10px] text-gray-500 transition ease-in-out duration-300 hover:underline" disabled={likes.length == 0}>
            <span className="font-bold text-[10px] text-marigold">{likes.length}</span>&nbsp;Likes
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 px-1 py-1 bg-marigold bg-opacity-90 text-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col w-full px-1 py-1 ">
              {likes.map(({ liker }, i) => (
                <Link href={`/${liker}`} key={i}>
                  <a className="text-[10px] hover:underline">{ liker }</a>
                </Link>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}