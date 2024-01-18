/* eslint-disable no-unused-vars */
import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'
import shareProfile from '../../assets/person/person2.jpg'
function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
             <img src={shareProfile} alt="" className="shareProfileImg" />
                <input placeholder='What something new !!' className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareButton">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="red" className='shareIcon'/>
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="orange" className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="sharesButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share