import NavigationBar from '~/components/NavigationBar'

export default function Layout({ children, account }) {
  return(
    <div className="flex flex-col w-full max-w-screen-2xl h-screen overflow-hidden bg-ghostwhite text-panther">
      <NavigationBar account={account} />
      <div className="flex w-full h-full">
        { children }
      </div>
    </div>
  )
}