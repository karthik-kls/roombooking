import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'
import SelectLabel from './SelectLabel'


const RoomPopUp = ({setAddroom}) => {
  const [Room , setRoom]=useState('')
  const [adult , setAdult]=useState('')
  const [child , setChild]=useState('')
  const [price, setPrice]=useState('')
  const [select, setSelect] = useState([])
  const sentData=(e)=>{
    e.preventDefault()
    console.log(Room,adult,child,price);
    setAddroom(false)
  }
  
  return (
    <div className='roomtablepop'>
    <div className='roomtitle2'>Add New Room {Room}</div>

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
    <div className="Amenities">

    <h2>Amenities </h2>
    <select onChange={(e)=>{setSelect([...select,e.target.value])}}>
      <option disabled value="select">Select</option>
      <option value="tv">Television</option>
      <option value="bed">Bed</option>
      <option value="wifi">Wifi</option>
      <option value="extra">Extre</option>
    </select>

   </div><div className='selectdata'>
    {select.map((data,index)=>{
    return(
    <SelectLabel select={select} data={data} key={index} index={index} setSelect={setSelect}/>
    )})}
    
    
    
    
    
    
    </div>
    
    </form>
    


    
    </div>
    

  )
}
export default RoomPopUp;