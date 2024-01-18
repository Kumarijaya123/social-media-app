/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./post.css"
import PropTypes from 'prop-types';
import Posts from '../../assets/person/person1.jpeg'
import { MoreVert } from '@material-ui/icons'
import Like from '../../assets/like.png'
import Heart from '../../assets/heart.png'
import {Users} from '../../data'


function Post({post}) {
  
  const [likedCount, setLikedCount] = useState(post?.like || 0);
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLikedCount(isLiked ? likedCount-1 : likedCount+1)
    setIsLiked(!isLiked)
  }
  if (!post) {
    return null; // Handle null or undefined posts
  }
  const { desc, photo, date, like, comment} = post;
  
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className="postDate">{date}</span>
                </div>
                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
            {desc && <span className="postText">{desc}</span>}
          {photo && <img src={photo} alt="" className="postImg" />}
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img src={Like} alt="" className="likeIcon" onClick={likeHandler}/>
                <img src={Heart} alt="" className="heartIcon" onClick={likeHandler}/>
                <span className="postLikeCounter">{likedCount} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{comment} comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}


Post.propTypes = {
  post: PropTypes.shape({
    desc: PropTypes.string,
    photo: PropTypes.string,
    date: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
    // Add other properties here according to your data structure
  }).isRequired,
};
export default Post