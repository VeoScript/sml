

export default function Layout({ children, account }) {
  return(
    <div className="flex flex-col w-full max-w-screen-2xl h-screen overflow-hidden bg-sml-dark text-sml-white">
      <div className="flex flex-col w-full h-full bg-sml-dim">
        <div className="flex flex-row items-center justify-between w-full px-10 py-5">
          <div className="flex flex-row items-center justify-start w-full space-x-3">
            <span className="font-bold text-xl text-sml-mocha">#SML</span>
            <input className="w-full rounded-md max-w-xs px-3 py-1 bg-sml-dark focus:outline-none" type="text" placeholder="Search" />
          </div>
          <div className="flex flex-row items-center justify-end w-full space-x-3">
            <div className="flex flex-row items-center space-x-2">
              <img className="w-10 h-10 rounded-full object-cover" src={ account.image } />
              <span className="font-normal text-base text-sml-white">{ account.name }</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full">
        { children }
      </div>
    </div>
  )
}