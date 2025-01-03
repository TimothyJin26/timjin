import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '../components/common/Preloader'

const Navbar = lazy(() => import('../components/layout/Navbar'))


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Tim Jin | Student | Software Engineer</title>
        <meta
          name="description"
          content="Student at the University of British Columbia"
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <Navbar />
        <div>Hello World</div>
      </Suspense>
    </>
  )
}
