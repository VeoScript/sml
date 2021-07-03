import Link from 'next/link'
import { useRouter } from 'next/router'
import { navigations } from "~/static/links"

export default function SideBar({ account }) {

  const router = useRouter()

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
    <div className="flex flex-col justify-between w-full max-w-[18rem] h-full px-5 py-5 overflow-y-auto border-r border-marigold">
      <div className="flex flex-col w-full space-y-2">
        <img className="w-20 h-20 rounded-full object-cover bg-marigold" src={account.image} />
        <div className="flex flex-col w-full">
          <span className="font-bold text-2xl text-panther">{account.name}</span>
          <span className="font-light text-base text-panther">@{account.username}</span>
        </div>
        <div className="flex flex-col w-full py-5 space-y-1">
          {navigations.map(({ name, icon, href }, i) => (
            <Link href={href} key={i}>
              <a className={`${router.pathname === href ? 'bg-marigold text-white hover:bg-opacity-80' : 'bg-none hover:bg-marigold hover:bg-opacity-30'} flex flex-row items-center text-lg text-panther rounded-full space-x-3 px-5 py-3 transition ease-in-out duration-300`}>
                <span>{icon}</span>
                <span>{name}</span>
              </a>
            </Link>
          ))}
          <button onClick={handleLogout} className="flex flex-row items-center text-lg text-panther rounded-full space-x-3 px-5 py-3 transition ease-in-out duration-300 bg-none hover:bg-marigold hover:bg-opacity-30">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 19v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.576-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.424 0 2.774-.302 4-.838v-2.162zm4-9.592l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"/></svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full space-y-3">
        <button className="w-full text-base text-white bg-marigold rounded-full space-x-3 px-5 py-3 transition ease-in-out duration-300 hover:bg-opacity-80">
          <span>Write Post</span>
        </button>
        <span className="text-xs opacity-50">&copy;&nbsp;{ new Date().getFullYear() } SML #ShareMoLang, Veoscript.</span>
      </div>
    </div>
  )
}