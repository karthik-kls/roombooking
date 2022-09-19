import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Roomdetails from '../Component/Addroom/Roomdetails'
import {Dataroom} from '../Component/Addroom/Dataroom'
// import RoomPopUp from '../Component/Addroom/RoomPopUp/RoomPopUp'
// import { useState } from 'react'

const Room = () => {
  
  return (
    <div>
        <Navbar/>
        <Roomdetails data={Dataroom}/>
        {/* <RoomPopUp/> */}

    </div>
  )
}

export default Room