import { useContext, useState } from 'react'
import { Button } from '../components/Button'
import { Title } from '../components/Title'
import { DispatchAccountContext } from '../context/AccountProvider'
import Layout from '../Layout'

const HomePage = () => {
  const accountDispatch = useContext(DispatchAccountContext)
  const [user, setUser] = useState('')
  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-3">
          <div className="text-center py-3">
            <Title />
            <p className="mt-3 font-semibold">
              Are you an introvert or an extrovert?
            </p>
            <p>
              We are here to help people realize who they and know what category
              they belong to.
            </p>
          </div>
          <div>
            <label htmlFor="userName">Enter your name to login</label>
            <input
              type="text"
              id="userName"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-2">
            <Button
              disabled={!user}
              onClick={() => {
                accountDispatch({
                  action: 'login',
                  payload: user,
                })
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
