import React from 'react'
import { useState } from 'react'
import InputComponent from '../Addroom/RoomPopUp/InputText/InputComponent'
import Button from '../Button/Button'

const NewBookingsCmp = () => {

  const [guest, setGuest] = useState('')
  const [first, setFirst] = useState('')
  const [chkin, setChkin] = useState('')
  const [chkout, setChkout] = useState('')
  const [adult, setAdult] = useState('')
  const [Child, setChild] = useState('')
  const sentData=(e)=>{
    e.preventDefault()
    console.log(guest,first,chkin,chkout,adult,Child);
  }

  return (
    <div className='bookingbox'>
        <div className='bookingtitle'>New Bookings</div>
        <form action="" onSubmit={sentData}>
            <InputComponent type='Text' text='Guest Last Name' setState={setGuest}/>
            <InputComponent type='Text' text='Guest First Name' setState={setFirst}/>
            <InputComponent type='Date' text='Check in Date' setState={setChkin}/>
            <InputComponent type='Date' text='Check in Date' setState={setChkout}/>
            <InputComponent type='Number' text='Number of Adult' setState={setAdult}/>
            <InputComponent type='Number' text='Number of Children' setState={setChild}/>
            <div className='getbttn'>
            <Button text='Get Available Room' />
            </div>
            </form>

        


    </div>
  )
}

export default NewBookingsCmp