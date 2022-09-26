import React from 'react'
import { useState } from 'react'
import InputComponent from '../Addroom/RoomPopUp/InputText/InputComponent'
import Button from '../Button/Button'
import Button2 from './Button2'
import '../../Pages/Home.css'
import { useNavigate } from 'react-router-dom'

const NewBookingsCmp = () => {

  const [guest, setGuest] = useState('')
  const [first, setFirst] = useState('')
  const [chkin, setChkin] = useState('')
  const [chkout, setChkout] = useState('')
  const [adult, setAdult] = useState('')
  const [Child, setChild] = useState('')
  const [getavl,setGetavl]= useState(false)
  const [book,setBook]=useState(false)
  const Navigate =useNavigate()

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
            <InputComponent type='Date' text='Check In Date' setState={setChkin}/>
            <InputComponent type='Date' text='Check Out Date' setState={setChkout}/>
            <InputComponent type='Number' text='Number of Adult' setState={setAdult}/>
            <InputComponent type='Number' text='Number of Children' setState={setChild}/>
            <div className='bookingbttns'>
              <div className='getbttn'>
            <Button text='Get Available Room' func={()=>{setGetavl(!getavl);
              console.log(getavl);}} />
            
              <div>{getavl ? <div className='getbttn'>  <Button2 classN='bttn2' text='Book' funcbtn={()=>{setBook(!book)}} /> <div className='back' onClick={()=>{Navigate(-1)}} >Back</div> </div>:""}</div>
              
              </div>
              {book && <div className='bttns' >
              <div className='bttn2'>Check In</div > <div className='bttn2'>Check Out</div> <div className='bttn2'>Cancel</div>

              </div>}
             
             
             
             
              </div>
            </form>
            

        


    </div>
  )
}

export default NewBookingsCmp