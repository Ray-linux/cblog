import React from 'react'
import Banner from '../banner/Banner'
import Categories from '../categories/Categories'
import './home.css'
import Posts from './posts/Posts'
import Nav from '../nav/Nav'

export default function Home({isAuthenticated, isUserAuthenticated}) {
  return (
    <div>
      <Nav isAuthenticated={isAuthenticated} isUserAuthenticated = {isUserAuthenticated}/>
      <Banner/>
      <Categories isAuthenticated={isAuthenticated}/>
      <Posts isAuthenticated={isAuthenticated}/>
    </div>
  )
}
