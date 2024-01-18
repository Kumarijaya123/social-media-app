import Feed from '../../../components/feed/Feed'
import Rightbar from '../../../components/rightbar/Rightbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Topbar from '../../../components/topbar/Topbar'
import './profile.css'
import Profilepost from '../../../assets/post/post5.jpg'
import Profileperson from '../../../assets/person/person3.jpeg'

function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src={Profilepost} alt="" className="profileCoverImg" />
            <img src={Profileperson} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sowmya Muth Genda Swami</h4>
                <span className="profileInfoDesc">Hello friends!</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
      <Rightbar profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile