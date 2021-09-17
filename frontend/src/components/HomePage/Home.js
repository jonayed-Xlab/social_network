import React, { Component } from 'react'
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MainContent/>
            </div>
        )
    }
}
