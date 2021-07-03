import { useState } from 'react'
import { useRouter } from 'next/router'

export default function NavigationBar({ account }) {

  const router = useRouter()

  const [ isOpen, setIsOpen ] = useState(false)

  async function handleLogout() {
    await fetch('/api/logout', {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
      }
    })
    router.push('/login')
  }

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="flex flex-row items-center justify-between w-full px-10 py-5">
        <div className="flex flex-row items-center justify-start w-full space-x-3">
          <span className="font-bold text-xl text-marigold">#SML</span>
          <input className="w-full rounded-md max-w-xs px-3 py-2 text-sm bg-ghostwhite focus:outline-none" type="text" placeholder="Search" />
        </div>
        <div className="flex flex-row items-center justify-end w-full space-x-3">
          <div className="flex flex-col w-full max-w-[13rem] space-y-1">
            <button onClick={() => {setIsOpen(true)}} className="flex flex-row items-center space-x-2">
              <img className="w-10 h-10 rounded-full object-cover" src={ account.image } />
              <span className="font-normal text-base text-sml-white">{ account.name }</span>
            </button>
            {setIsOpen && (
              <>
                <button onClick={() => {setIsOpen(false)}} type="button" className={`${isOpen ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
                <div className={`z-40 w-full max-w-sm h-full ${isOpen ? 'relative' : 'hidden'}`}>
                  <div className="absolute w-full h-auto overflow-hidden mt-2 rounded-md bg-white text-panther border border-marigold z-10">
                    <div className="flex flex-row w-full h-auto max-h-[15rem] overflow-y-auto bg-opacity-75">
                      <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full">
                          <span className="px-3 py-2">Profile</span>
                        </div>
                        <hr className="w-full border-t border-marigold" />
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-sm text-panther px-3 py-2 hover:bg-opacity-60 hover:bg-kkum-dark space-x-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                          </svg>
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}