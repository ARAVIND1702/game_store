import React, { Component } from 'react'
import gtavid from '../pic/gtavid.mp4'
class gta extends Component{
    render(){
    return (
    <div className='myvideo'>
                <video src={gtavid} autoPlay loop muted />

    </div>
    );
}
}

export default gta