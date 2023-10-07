import React from 'react'
import './messenger.css'
import Navbar from '../../components/Navigation/Navbar'
import Conversation from '../../components/Conversations/Conversation'
import Message from '../../components/Message/Message'
import ChatOnline from '../../components/ChatOnline/ChatOnline'

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
                <div className="chatBoxTop">
                    <Message/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chatBoxBottom">
                    <textarea placeholder='write something...' className="chatMessageInput"></textarea>
                    <button className="chatSubmitButton">Send</button>
                </div>
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline/>
            </div>
        </div>
    </div>
    </>
  )
}
