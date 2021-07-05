import Moment from 'react-moment'

export default function DisplayContent({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="display-content flex flex-col w-full rounded-lg shadow-sm bg-white">
          <div className="flex flex-col w-full space-y-3 px-3 py-3 border border-gray-300 rounded-lg">
            <div className="flex flex-row items-center w-full space-x-2">
              <img className="w-full h-12 max-w-[48px] object-cover rounded-full bg-marigold" src={post.authorImage} />
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center w-full space-x-1">
                  <span className="font-bold text-base text-panther">{ post.authorName }</span>
                  <span className="font-normal text-sm text-gray-500">@{ post.authorUsername }</span>
                  <span className="font-normal text-xs text-gray-500">&bull; <Moment date={ post.createdAt } fromNow /></span>
                </div>
                <div className="flex w-full">
                  {post.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}