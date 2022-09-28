import logo2 from '../cake.png';
import { AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import '../App.css';


function Event() {
  return (
    
    <div className="Text-Area2">

      <img src={logo2} className="App-logo2" alt="logo2" />
      <h3>Birthday Bash</h3>

      <p1>Hosted by <b>Elysia</b></p1>
      <div className='details1'>
    
        <div className="icon1"><AiOutlineCalendar color='purple' /></div>
        <p2>18 August 6:00PM <br></br> <span2>to <b>19 August 1:00PM </b>UTC +10</span2></p2>
      </div>

      <div className='details2'>
    
        <div className="icon2"><HiOutlineLocationMarker color='purple' /></div>
        <p3>Street name <br></br> <span2>Suburb, State, Postcode</span2></p3>
      </div>


    </div>
  );
}

export default Event;