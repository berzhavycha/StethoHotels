import { useEffect, useState, useLayoutEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation, Outlet } from 'react-router-dom'
import './App.css'
import Layout from './common/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import { motion } from "framer-motion";
import HeaderLayout from './common/HeaderLayout/HeaderLayout'
import Gallery from './components/Gallery/Gallery'
import Destinations from './components/Destinations/Destinations'
import DestinationDetail, { loader as destinationDetailLoader } from './components/Destinations/DestinationDetail/DestinationDetail'
import BlogLayout, { loader as blogLayoutLoader } from './common/BlogLayout/BlogLayout'
import Blog from './components/Blog/Blog'
import BlogSingal, { loader as blogSingalLoader } from './components/BlogSingal/BlogSingal'
import Login from './components/Login/Login'
import Register, { action as registerAction } from './components/Register/Register'

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

const AnimationLayout = () => {
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
          loader={destinationDetailLoader}
        />
        <Route path='blog' element={<BlogLayout />} loader={blogLayoutLoader}>
          <Route index element={<Blog />} />
          <Route path=':blogId' element={<BlogSingal />} loader={blogSingalLoader} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} action={registerAction} />
      </Route>
    </Route>
  </Route >
))


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
