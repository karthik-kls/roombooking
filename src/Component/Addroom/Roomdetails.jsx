import React, { useEffect } from 'react'
import '../Addroom/Roomdetails.css' 
import Roomtable from './Roomtable'
import Button from '../Button/Button'
import RoomPopUp from './RoomPopUp/RoomPopUp'
import { useState } from 'react'
import apiCall from '../../Services/apiCall'


const Roomdetails = ({data,setEditbtn}) => {
const [roomData,setRoomdata]=useState([]);
const[isEditing,setisEditing]=useState(false);
const [addroom,setAddroom]=useState(false);



useEffect(() =>{
  apiCall("/rooms")
  .then(response=>{
    console.log(response);
    setRoomdata(response);
  })

}, [addroom])




    function Popuproom() {
      setAddroom(true);
      
    }



  return (
    <div className='roombox'>
        <div className='room01'>
        <div className='roomtitle'>Rooms</div>




        {/* <Addroombtn className='btnroom'/> */}
        <Button text='+AddRoom' func={Popuproom}/>
        </div>
        <Roomtable data={roomData} setEditbtn={setAddroom} setisEditing={setisEditing}/>
        
      <div className={addroom?"Popuproom":""}  >
      {addroom && <RoomPopUp setAddroom={setAddroom} setisEditing={setisEditing} isEditing={isEditing}/>}
      </div>
    </div>
  )
}

export default Roomdetails;