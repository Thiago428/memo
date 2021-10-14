import React, { Component } from 'react';

class Rect extends Component {
    x = 0
    y = 0
    wibth = 0
    height = 0
    color = "white"
    style = {}

    constructor(props) {
        super(props)
        this.x = props.x
        this.y = props.y
        this.wibth = props.w
        this.height = props.h
        this.color = props.c
        this.rabius = props.r
        this.style ={
            backgroundColor:this.color,
            position:"absolute",
            left:this.x + "px",
            top:this.y + "px",
            wibth:this.wibth + "px",
            borderRadius:this.rabius + "px"
        }
    }
    render(){
        return <div style={this.style}></div>
    }
}

export default Rect