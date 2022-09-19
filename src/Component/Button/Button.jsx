import React from 'react'

const Button = ({text,func,wid}) => {
  return (
    <button className='bttn' onClick={func} width={wid} >{text}   </button>
  )
}

export default Button