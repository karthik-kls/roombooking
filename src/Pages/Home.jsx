import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import './Home.css'
import Checkbox from '../Component/Checking/Checkbox';
import icon3 from './out.svg'
import icon4 from './in.svg'
import {indata} from '../Component/Checking/Data'
import {outdata} from '../Component/Checking/Outdata'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='roomimg'></div>
    <div className='details'>
    <Checkbox boxicon={icon4} data={indata} title='Check In Today' text='Checkin' />
    <Checkbox boxicon={icon3} data={outdata} title='Check Out Today' text='Check out' />
    </div>
    </div>

  )
}

export default Home