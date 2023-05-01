
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Router'
import Auth from './Contex/Auth'

function App() {

  return (
    <div>
      <Auth>
        <RouterProvider router={router}></RouterProvider>
      </Auth>
    </div>
  )
}

export default App
