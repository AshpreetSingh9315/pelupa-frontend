import React from 'react'

export default function layout({children}) {
  return (
    <div className='h-screen w-full p-0 flex justify-center items-center bg-[#0A0A0A]'>{children}</div>
  )
}
