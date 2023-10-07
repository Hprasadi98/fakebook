import React from 'react'
import './messenger.css'
import Navbar from '../../components/Navigation/Navbar'
import Conversation from '../../components/Conversations/Conversation'

export default function Messenger() {
  return (
    <>
    <Navbar/>
    <div className='messenger'>
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder='Search for friends' type="text" className="chatMenuInput" />
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                box
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                online
            </div>
        </div>
    </div>
    </>
  )
}
