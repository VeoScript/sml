import Link from 'next/link'
import Moment from 'react-moment'

export default function DisplayContent({ posts }) {
  return (
    <>
      {posts.map(({ content, createdAt, author }, i) => (
        <div className="display-content flex flex-col w-full rounded-lg shadow-sm bg-white" key={i}>
          <div className="flex flex-row items-center justify-between w-full px-3 py-3 border border-gray-300 rounded-lg">
            <div className="flex flex-row items-start w-full space-x-2">
              <img className="w-full h-14 max-w-[56px] object-cover rounded-full bg-marigold" src={author.image} />
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center w-full space-x-1">
                  <span className="font-bold text-base text-panther">{ author.name }</span>
                  <span className="font-normal text-sm text-gray-500">@{ author.username }</span>
                </div>
                <div className="flex w-full">
                  {content}
                </div>
                <div className="flex flex-row items-center w-full mt-1 space-x-2">
                  <span className="font-normal text-[10px] text-gray-500"><Moment date={ createdAt } fromNow /></span>
                  <div className="flex items-center space-x-1">
                    <span className="font-normal text-[10px] text-gray-500">&bull;</span>
                    <Link href="/">
                      <a className="font-normal text-[10px] text-gray-500 transition ease-in-out duration-300 hover:underline">
                        <span className="font-bold text-[10px] text-gray-500">98</span>&nbsp;Likes
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-normal text-[10px] text-gray-500">&bull;</span>
                    <Link href="/">
                      <a className="font-normal text-[10px] text-gray-500 transition ease-in-out duration-300 hover:underline">
                        <span className="font-bold text-[10px] text-gray-500">33</span>&nbsp;Comments
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex px-5">
              <button>
                <svg className="w-6 h-6 fill-current text-marigold hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                </svg>
                <svg className="w-6 h-6 fill-current text-marigold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}