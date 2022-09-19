import React from 'react'
import '../Addroom/Roomdetails.css' 
import Roomtable from './Roomtable'
import Button from '../Button/Button'
import RoomPopUp from './RoomPopUp/RoomPopUp'
import { useState } from 'react'
const Roomdetails = ({data}) => {

   const [addroom,setAddroom]=useState(false);
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
        <Roomtable data={data}/>
        
      <div className={addroom?"Popuproom":""}  >
      {addroom && <RoomPopUp setAddroom={setAddroom}/>}
      </div>
    </div>
  )
}

export default Roomdetails;