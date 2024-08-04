import React from 'react'
import Link from "next/link"

const Header = (props) => {
  return (
    <>
    <div className='h-20 text-white bg-orange-700 flex items-center justify-between px-5'>
      <h1 className='flex gap-3'>Logo</h1>
      <Link href='/About'>About</Link>
      <Link href='/Product'>Product</Link>
      <Link href='/Course'>Courses</Link>
    </div>
    </>
  )
}

export default Header