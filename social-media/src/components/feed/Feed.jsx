/* eslint-disable no-unused-vars */
import React from 'react'
import './feed.css'
import Share from "../share/Share"
import Post from '../posts/Post'
import {Posts} from '../../data'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
        <Post/>
       
        </div> 
    </div>
  )
}

export default Feed