import SearchParams from "./components/SearchParams"
import Details from "./components/Details"
import Layout from "./components/Layout"

// React Router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// React Router Setup
const router = createBrowserRouter([{
  element: <Layout />,
  children: [{
    path: '/',
    element: <SearchParams />
  },
  {
    path: '/details/:id',
    element: <Details />
  }]
}
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
