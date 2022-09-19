import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'



const RoomPopUp = ({setAddroom}) => {
  const [Room , setRoom]=useState('')
  const [adult , setAdult]=useState('')
  const [child , setChild]=useState('')
  const [price, setPrice]=useState('')
  const sentData=(e)=>{
    e.preventDefault()
    console.log(Room,adult,child,price);
    setAddroom(false)
  }
  
  return (
    <div className='roomtablepop'>
    <div className='roomtitle2'>Room {Room}</div>

    <form method='post' onSubmit={sentData} >
    <InputComponent type='Number' text='Room Number'  setState={setRoom}/>
    <InputComponent type='Number' text='Adult Capacity' setState={setAdult}/>
    <InputComponent type='Number' text='Children Capacity'setState={setChild}/>
    <InputComponent type='Number' text='Price'setState={setPrice}/>
    <div className='pop-bttn'>
    <Button  text='Save'/> 
    <div>or</div>
    <div className='cancel' onClick={()=>{setAddroom(false)}}>Cancel</div>
    </div>
    <div className="roomtitle2">Amenities</div>
    
    </form>
    


    
    </div>
    

  )
}
export default RoomPopUp;