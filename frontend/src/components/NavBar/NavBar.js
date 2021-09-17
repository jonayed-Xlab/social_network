import React, { Component } from 'react';
import "./NavBar.css";
import Grid from "@material-ui/core/Grid/";
import inst_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import pp from "../../images/pp1.png";
import Avatar from '@material-ui/core/Avatar';


export default class NavBar extends Component {
    
    render() {
        return (
            <div>
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <img className="navbar__logo" src={inst_logo} width="105px" alt="" />
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navbar__searchbar" placeholder="Search"/>
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>

                            <img className="navbar__img" src={home} alt="" width="25px"/>
                            <img className="navbar__img" src={message} alt="" width="25px"/>
                            <img className="navbar__img" src={find} alt="" width="25px"/>
                            <img className="navbar__img" src={react} alt="" width="25px"/>
                            <Avatar className="navbar__img" src={pp} style={{maxWidth:"25px", maxHeight:"25px"}}/>
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                </div>
            </div>
        )
    }
}
