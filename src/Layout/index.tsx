import { PropsWithChildren } from 'react'
import Header from './Header'

const Layout = ({
  children,
  loggedIn,
}: PropsWithChildren<{ loggedIn?: boolean }>) => {
  return (
    <div
      className={`bg-yellow-50 h-screen grid ${
        loggedIn ? 'grid-rows-[60px_1fr_50px]' : 'grid-rows-[1fr_50px]'
      }`}
    >
      {loggedIn && <Header />}
      <div className="px-8 py-12">
        <div className="max-w-[900px] mx-auto h-full">{children}</div>
      </div>
      <footer className="flex justify-center items-center">
        <small>Copyright {new Date().getFullYear()} - Teamway</small>
      </footer>
    </div>
  )
}

export default Layout
