import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  return (
    <UserContextProvider>
      {/* Conditional rendering */}
      <Login />  {/* Login component show karega agar user null hai */}
      <Profile /> {/* Profile show karega agar user exist kare */}
    </UserContextProvider>
  )
}

export default App
