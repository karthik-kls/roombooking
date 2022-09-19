import React from 'react'

const Datatable = ({data}) => {
  return (
    <div className='valuetableroom'>
    <div className='orange'>{data.roomnumber}</div>
    <div>{data.adultcapacity}</div>
    <div>{data.childrencapacity}</div>
    <div className='red'>{data.price}</div>
    </div>

  )
}

export default Datatable