import Link from 'next/link'

export default function DisplayNews({ news }) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto px-3 pb-3 border-b border-marigold border-opacity-30 space-y-3">
      <h1 className="font-bold text-base text-gray-500 mb-1">Pilipinas Balita</h1>
      {news.articles.map((({ author, title, url, urlToImage }, i) => {
        return (
          <Link href={url} key={i}>
            <a target="_blank" className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-row items-start space-x-2">
                <img className="w-full max-w-[3rem] h-10 rounded-sm object-cover" src={ !urlToImage ? 'https://blog.remitly.com/wp-content/uploads/2018/06/philippines-1195394_1920.jpg' : urlToImage } />
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{author}</span>
                  <span className="font-light text-xs">{title}</span>
                </div>
              </div>
            </a>
          </Link>
        )
      }))}
    </div>
  )
}