import RoundBox from './RoundBox.js';
import './HostSettings.css';

function HostSettings() {
    return(
    <div className="HostSettings">
        <h1>Settings</h1>
        <hr></hr>
        <RoundBox color="grey scrollbox">
            <RoundBox color="darkTeal">
                <p><b>Group Name:</b><br></br></p>
                <RoundBox color="teal">
                    <p>Swift Skiers</p>
                </RoundBox>
            </RoundBox>
            <RoundBox color="darkTeal">
                <p><b>Pace:</b></p>
                <RoundBox color="teal">
                    <p>4:36/mile</p>
                </RoundBox>
            </RoundBox>
            <RoundBox color="darkTeal">
                <p><b>Group Description:</b></p>
                <RoundBox color="teal">
                    <p>Just a couple of people looking to have fun and meet new people on the slopes! Meetings every other Wednesday.</p>
                </RoundBox>
            </RoundBox>
            <RoundBox color="darkTeal">
                <p><b>Upcoming Workouts:</b><br></br>
                Name:</p>
                <RoundBox color="teal">
                    <p>Sunrise Ski</p>
                </RoundBox>
                <p>Date:</p>
                <RoundBox color="teal">
                    <p>7/13/2021</p>
                </RoundBox>
                <p>Time:</p>
                <RoundBox color="teal">
                    <p>6:15     AM</p>
                </RoundBox>
                <p>Pace:</p>
                <RoundBox color="teal">
                    <p>15:50 / mile</p>
                </RoundBox>
                <p>Location:</p>
                <RoundBox color="teal">
                    <p>4135 W Lake Harriet Pkwy</p>
                </RoundBox>
                </RoundBox>

        </RoundBox>

        
    </div>
    );
}

export default HostSettings;