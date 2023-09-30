import { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation, Outlet } from 'react-router-dom'

import Layout from './common/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import { motion } from "framer-motion";
import HeaderLayout from './common/HeaderLayout/HeaderLayout'
import Gallery from './components/Gallery/Gallery'
import Destinations from './components/Destinations/Destinations'
import DestinationDetail from './components/Destinations/DestinationDetail/DestinationDetail'
import BlogLayout, { loader as blogLayoutLoader } from './common/BlogLayout/BlogLayout'
import Blog from './components/Blog/Blog'
import BlogSingal from './components/BlogSingal/BlogSingal'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AuthRequired from './common/AuthRequired/AuthRequired'
import FaqLayout from './components/FaqLayout/FaqLayout'
import HotelListing from './components/HotelListing/HotelListing'
import HotelDetail from './components/HotelDetail/HotelDetail'
import ContactUs from './components/ContactUs/ContactUs'
import NotFound from './common/NotFound/NotFound'

import './App.css'

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5
};

export const AnimationLayout = () => {
  const { pathname } = useLocation();


  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])


  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};



const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AnimationLayout />}>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<HeaderLayout />}>
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='destinations' element={<Destinations />} />
        <Route
          path='destinations/:cityId'
          element={<DestinationDetail />}
        />
        <Route
          path='blog'
          element={<BlogLayout />}
          loader={blogLayoutLoader}
          errorElement={<h1>Error</h1>}
        >
          <Route index element={<Blog />} />
          <Route path=':blogId' element={<AuthRequired />}>
            <Route index element={<BlogSingal />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='faq' element={<FaqLayout />} />
        <Route path='hotels' element={<HotelListing />} />
        <Route path='hotels/:hotelId' element={<HotelDetail />} />
        <Route path='contactus' element={<ContactUs />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
)
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
