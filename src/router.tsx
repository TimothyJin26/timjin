import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Default from './pages/Default'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/default'
        element={<Default />}
      />
    </Routes>
  )
}
