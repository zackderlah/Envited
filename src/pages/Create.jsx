import React from 'react';

import '../App.css';

    import { Link } from "react-router-dom";


    function Create() {
        return (
            <div className="Text-Area">


                <h4>
                    Create Event
                </h4>
                <div className='event-form'>
                    <form>
                        <label for="fname">Event name</label><br></br>
                        <input type="text" id="ename" name="eventname" placeholder="Event name"></input>
                        <br></br>
                        <label for="hname">Host name</label><br></br>
                        <input type="text" id="hname" name="hostname" placeholder="Host name"></input>
                        <br></br>
                        <label for="starttime">Start time</label><br></br>
                        <input type="datetime-local" id="meeting-time" name="meeting-time" value=""></input>
                        <br></br>
                        <label for="endtime">End time</label><br></br>
                        <input type="datetime-local" id="meeting-time" name="meeting-time" value=""></input>
                        <br></br>
                        <label for="lname">Location </label><br></br>
                        <input type="text" id="location" name="location" placeholder="Location"></input>
                    </form>
                </div>

                <Link to="/event" className='btn2' >Next </Link>
            </div>
        )
    }

    export default Create;