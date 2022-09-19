import React from 'react'

const DatasBooking = ({data}) => {
  return (
        <div className='datasbookings'>
            <div className='fstname'>{data.guest}</div>
            <div>{data.name}</div>
            <div>{data.roomno}</div>
            <div className='green'>{data.indate}</div>
            <div className='red'>{data.outdata}</div>
            <div className='orange'>{data.status}</div>



        </div>
  )
}

export default DatasBooking