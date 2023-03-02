import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Products = () => {
  return (
    <>
    <div>
      <input type="search" placeholder='search products' />
    </div>
    <nav>
        <Link to='featured'> Featured </Link>
        <Link to='new'> New </Link>
    </nav>
    <Outlet />
    </>
  )
}


// <Outlet/> is used in parent route elements to render theirs child routes
//It allows nested UI to show up