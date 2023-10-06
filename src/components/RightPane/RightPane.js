import React from 'react'
import './rightPane.css'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponserd">Sponsored</span>
          <img src="/images/add.png" alt="" className="adImage" />
          <span className="adText">
            Publish your Adds by using mour fb page of HasiAdds. We can publish your adds definetly. Like our page now..!
          </span>
        </div>
        <div className="birthdayContainer">
          <img src="/images/bd.png" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Sadali Malshika</b> and <b>3 others</b> having birthday today</span>
        </div>
          <div className="friendList">
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/bgirl.jpeg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rukshani Pathirana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/bgirl.jpeg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rukshani Pathirana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/bgirl.jpeg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rukshani Pathirana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/bgirl.jpeg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rukshani Pathirana</span>
            </li>
            <li className="onlineFriend">
              <div className="onlineFriendImageContainer">
                <img src="/images/bgirl.jpeg" alt="" className="onlineFriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="onlineFriendName">Rukshani Pathirana</span>
            </li>
          </div>
      </div>
    </div>
  )
}
