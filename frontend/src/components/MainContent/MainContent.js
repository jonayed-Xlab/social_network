import React, { Component } from 'react'
import "./MainContent.css"
import Grid from "@material-ui/core/Grid/";
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import Suggestions from '../Suggestions/Suggestions';
import Info from '../Info/Info';



export default class MainContent extends Component {
    render() {
        return (
            <div>
               <Grid container>
                   <Grid item xs={2}></Grid>
                   <Grid item xs={6}>
                       <StatusBar/>
                       <MainPage/>
                   </Grid>
                   <Grid item xs={2}>
                      <Info/>
                       <Suggestions/>
                   </Grid>
                   <Grid item xs={2}></Grid>

               </Grid>
            </div>
        )
    }
}
