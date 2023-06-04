import Image from 'next/image'
import React from 'react'

const LogoComponent = (props :any) => {

  const {renderDefault} = props
  return (
    <div className='flex items-center space-x-2'>
        <Image className='rounded-full object-cover'
        src='/images/Profile1.png'
        width={50} 
        height={50} 
        alt='profile'
        />
        {renderDefault(props)}
    </div>
  )
}

export default LogoComponent