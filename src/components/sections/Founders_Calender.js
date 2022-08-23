import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Founders_Calender() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
    <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4' align="center">
     <h5>SCHEDULE A CALL</h5>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    </div>
    <div className='col-md-4'></div>
    </div>
    </>
  )
}