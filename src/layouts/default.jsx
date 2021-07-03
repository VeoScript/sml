import SideBar from '~/components/SideBar'

export default function Layout({ children, account }) {
  return(
    <div className="flex flex-row justify-center w-full max-w-full h-screen overflow-hidden bg-ghostwhite text-panther">
      <div className="flex flex-row w-full max-w-screen-2xl h-full overflow-x-hidden">
        <SideBar account={account} />
        <div className="flex w-full h-full">
          { children }
        </div>
      </div>
    </div>
  )
}