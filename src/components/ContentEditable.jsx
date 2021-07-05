import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export default function ContentEditable({ account }) {

  const router = useRouter()

  function refreshData() {
    router.push(router.asPath)
  }

  const defaultValues = {
    create_post: ''
  }

  const { register, handleSubmit, reset, setValue, setError, formState: { errors, isSubmitting } } = useForm({ defaultValues })

  useEffect(() => {
    register('create_post', { required: true })
  }, [register])

  async function handleCreatePost(formData) {
    const authorId = account.id
    const create_post = formData.create_post

    if (create_post === '') {
      setError('create_post')
      return
    }
    
    await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ create_post, authorId })
    })

    reset()
    refreshData()
    contentEditable.innerText = ''
  }

  return(
    <div className="content-editable flex flex-col w-full rounded-lg shadow-sm bg-white">
      <div className="flex flex-row w-full space-x-3 px-3 py-3 border border-gray-300 rounded-lg">
        <img className="w-12 h-12 object-cover rounded-full bg-cool-gray" src={account.image} />
        <div className="flex flex-col w-full space-y-1">
          <form onSubmit={handleSubmit(handleCreatePost)} className="flex flex-row w-full rounded-lg px-3 py-1 border border-marigold bg-white border-opacity-50">
            <div
              id="contentEditable"
              className={`w-full h-full text-base cursor-text focus:outline-none font-light py-2 ${isSubmitting ? 'disabled:bg-gray-500' : 'bg-white'}`}
              contentEditable
              placeholder={`What's new, ${ account.name.split(' ').slice(0, -1).join(' ') }?`}
              onInput={(e) => setValue('create_post', e.currentTarget.textContent, { shouldValidate: true })}
            />
            <div className="flex flex-row items-end py-2 space-x-2">
              <button type="button">
                <svg className="w-6 h-6 text-gray-500 hover:text-marigold transition ease-in-out duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
              <button type="submit" onKeyPress={(e) => e.ke && handleSubmit(handleCreatePost)} disabled={isSubmitting}>
                <svg className="w-5 h-5 text-gray-500 hover:text-marigold transition ease-in-out duration-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/>
                </svg>
              </button>
            </div>
          </form>
          {errors.create_post && <span className="text-xs text-marigold text-opacity-50">Create some content here before you post it.</span>}
        </div>
      </div>
    </div>
  )
}