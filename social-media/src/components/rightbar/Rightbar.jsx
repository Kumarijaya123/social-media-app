/* eslint-disable no-unused-vars */
import React from 'react'
import './rightbar.css'
import Gift from '../../assets/gift.png'
import Ads from '../../assets/ad.jpg'
import Profile from '../../assets/person/person2.jpg'
import { Users } from '../../data'
import Online from '../online/Online'
import Person1 from '../../assets/person/person2.jpg'
import Person2 from '../../assets/person/person3.jpeg'
import Person3 from '../../assets/person/person4.jpeg'
import Person4 from '../../assets/person/person5.jpeg'
import Person5 from '../../assets/person/person6.jpeg'



function Rightbar({profile}) {

  const HomeRightbar = () => {
     return(
      <>
       <div className="birthdayContainer">
          <img src={Gift} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Kajal Kumari </b> and <b> 5 other friends </b> have birthday today
          </span>
        </div>
        <img src={Ads} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
     )
  }

  const ProfileRightbar = () => {
    return (
    <>
    <h4 className='rightbarTitle'>User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">India</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Punjab</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src={Person1} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Janell Shrum</span>
      </div>
      <div className="rightbarFollowing">
        <img src={Person2} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Sowmya Baryee</span>
      </div>
      <div className="rightbarFollowing">
        <img src={Person3} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Aryan Sharma</span>
      </div>
      <div className="rightbarFollowing">
        <img src={Person4} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Pritam Shikandar</span>
      </div>
      <div className="rightbarFollowing">
        <img src={Person5} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Abhishek Kaundal</span>
      </div>
    </div>
    </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar