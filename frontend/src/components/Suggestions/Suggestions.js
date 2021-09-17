import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import imageSrc from '../../images/pp1.png';
import "./Suggestions.css"
export default class Suggestions extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <div className="suggestions__container">
                    <div className="suggestions__header">
                        <div className="">Suggestions for you</div>
                    </div>
                    <div className="suggestions__body">
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc} className="suggestions__image"/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc} className="suggestions__image"/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                        <div className="suggestions__friends">
                            <Avatar src={imageSrc} className="suggestions__image"/>
                            <div className="suggestions__username">Friend 1</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
