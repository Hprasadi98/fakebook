import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/3.jpg" alt="" className="postImage" />
                <span className="postUserName">Hasitha Vidanagamachchi</span>
                <span className="postTime">5mins ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Never give up without trying.
                </div>
                <img src="/images/3.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="reactionPic" />
                    <img src="/images/heart.png" alt="" className="reactionPic" />
                    <img src="/images/haha.png" alt="" className="reactionPic" />
                    <span className="likeCount">You and 225 other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">15 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
