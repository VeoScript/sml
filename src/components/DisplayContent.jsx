import Moment from 'react-moment'

export default function DisplayContent({ posts }) {
  return (
    <>
      {posts.map(({ content, createdAt, author }, i) => (
        <div className="display-content flex flex-col w-full rounded-lg shadow-sm bg-white" key={i}>
          <div className="flex flex-col w-full space-y-3 px-3 py-3 border border-gray-300 rounded-lg">
            <div className="flex flex-row items-start w-full space-x-2">
              <img className="w-full h-12 max-w-[48px] object-cover rounded-full bg-marigold" src={author.image} />
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center w-full space-x-1">
                  <span className="font-bold text-base text-panther">{ author.name }</span>
                  <span className="font-normal text-sm text-gray-500">@{ author.username }</span>
                </div>
                <div className="flex w-full">
                  {content}
                </div>
                <span className="font-normal text-[10px] text-gray-500 mt-1"><Moment date={ createdAt } fromNow /></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}