import React, { Component } from 'react';
import RoundBox from './RoundBox.js';
import './GroupPage.css';
import Schedule from './Schedule.js';
import Chatboard from './Chatboard.js';
import {Link} from 'react-router-dom';

class GroupPage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            status: "nonmember"
        }
    }

    transition = {
        "nonmember": "waiting",
        "waiting": "approved",
        "approved": "member",
        "member": "member"
    };

    handleClick = () =>
    {
        
        console.log("the button was clicked");
        this.setState((state, props) => {
            console.log(state.status+"-->"+this.transition[state.status]);
            return ({
            status: this.transition[state.status]
        })});
    };

    render() {
        let bottomView;
        if (this.state.status == 'nonmember') {
            bottomView = 
                <RoundBox color="darkTeal" onClick={this.handleClick}>
                    <h3 className="joinbutton">Request to Join</h3>
                </RoundBox>;
        } else if (this.state.status == 'waiting') {
            bottomView = 
                <h3 onClick={this.handleClick} className="joinbutton-dark">Waiting for host approval</h3>;
        } else if (this.state.status == "approved") {
            bottomView = 
            <h3 onClick={this.handleClick} className="joinbutton-dark">Your request to join was approved! Welcome to Swift Skiers!</h3>;
        } else if (this.state.status == "member") {
            bottomView = <div className="container">
            <div className="GroupPage">
            <RoundBox color="grey scrollbox">
                <div className="row">
                    <div className="column">
                    <h2>Upcoming Workouts</h2>
                    </div>
                    <div className="column" className="openButton"> 
                    <Link to={"Schedule"} style={{ textDecoration: 'none', color: 'black'}}>
                    <RoundBox color="teal">
                    <h3>Open</h3>
                    </RoundBox>
                    </Link>
                    </div>
                </div>
                <Schedule></Schedule>
            </RoundBox>
            </div>
            <div className="GroupPage">
            <RoundBox color="grey scrollbox">
            <div className="row">
                    <div className="column">
                    <h2>Chat</h2>
                    </div>
                    <div className="column" className="openButton"> 
                    <Link to={"Chatboard"} style={{ textDecoration: 'none', color: 'black'}}>
                    <RoundBox color="teal">
                    <h3>Open</h3>
                    </RoundBox>
                    </Link>
                    </div>
                </div>
                <Chatboard></Chatboard>
            </RoundBox>
            </div></div>;
        }
        return (
            <div className="container"> 
                    <RoundBox color="grey">
                        <div className="row">
                        <div className="column group-title">
                            <h1>Swift Skiers</h1>
                        </div>
                        <div className="column">
                            56 members <br/>
                            Founded <b>11/26/2003</b><br/>
                            Skiing ~ 4:36/mile
                        </div>   
                        </div>
                    </RoundBox>
                    <p className="textWithMargin">Welcome, we’re a group of friendly skiers! We meet every other Wednesday and at some other events. We are mostly in our 30's but welcome anyone who loves to ski!</p>

                {bottomView}
            </div>
        );
}
}

export default GroupPage;