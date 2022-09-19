import React from 'react'
import Button from '../Button/Button'
const Box = ({data,text}) => {
  return (
    <div className='chkbox'>
    <div className='people'>
        <div className='names'>{data.name}</div>
        <div>{data.date}</div>
    </div>
    <div>{data.roomno}</div>
    <Button text={text} />
    

</div>



  )
}


export default Box