import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center -mt-24 h-screen">
      <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
      <p>Sorry, the URL you have used may be incorrect.</p>
      <p>
        Check the spelling or{' '}
        <NavLink to="/" className="font-semibold text-blue-500 underline">
          click here
        </NavLink>{' '}
        to navigate to the homepage.
      </p>
    </div>
  )
}

export default NotFoundPage
