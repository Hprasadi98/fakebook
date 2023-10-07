import React from 'react'
import './message.css'

export default function Message({own}) {
  return (
    <div className={own?'message own':'message'}>
        <div className="messageTop">
            <img src="./images/2.jpeg" alt="" className="messageImage" />
            <p className='messageText'>Hello</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
