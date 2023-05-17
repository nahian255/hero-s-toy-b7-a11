
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Router'
import ToyProvider from './provider/ToyProvider'

function App() {

  return (
    <div>
      <ToyProvider>
        <RouterProvider router={router}></RouterProvider>
      </ToyProvider>
    </div>
  )
}

export default App
