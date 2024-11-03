import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../redux/redux-store';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer';
import { StatusType } from '../../api/chat-api';


const ChatPage: React.FC = () => {
  return (
    <div><Chat/></div>
  )
}

export type ChatMessageType = {
    message: string
    photo: string
    usedID: number
    userName: string
}

const Chat: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const chatStatus = useSelector((state: AppStateType) => state.chat.chatStatus)

  useEffect(() => {
    setTimeout(() => dispatch(startMessagesListening()), 500) //delay for scroll
    return () => {
      dispatch(stopMessagesListening());
    }
  }, [dispatch])

  return (
    <div>
      {chatStatus === 'error'&& 
        <div>Some error occured. Please refresh the page</div>}
          <>
            <Messages />
            <AddMessageForm chatStatus={chatStatus}/>
          </>
      
    </div>
  )
}

const Messages: React.FC<{}> = ({}) => {
  const messages = useSelector((state: AppStateType) => state.chat.messages)
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (Math.abs( (element.scrollHeight - element.scrollTop) - element.clientHeight ) < 300)
    {
        !isAutoScroll && setIsAutoScroll(true)
    } else {
        isAutoScroll && setIsAutoScroll(false)
    }
  }

  useEffect(() => {
    if (isAutoScroll) {
    messagesAnchorRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth'})
    }
  }, [messages])

    return (
      <div style={{height: '600px', overflowY: 'auto'}} onScroll={scrollHandler}>
          {messages.map((m, index) => <Message key={m.id} message={m}/>)}
          <div ref={messagesAnchorRef}></div>
      </div>
    )
  }

const Message: React.FC<{message: ChatMessageType}> = React.memo(({message}) => {
return (
    <div>
        <img src={message.photo} alt='noAvatar' style={{width: '50px'}}/> 
        <p>{message.userName}</p>
        <p>{message.message}</p>
        <hr/>
    </div>
)
})

const AddMessageForm: React.FC<{chatStatus: StatusType}> = ({chatStatus}) => {

const [message, setMessage] = useState('');
const dispatch = useDispatch<AppDispatch>();

const sendMessageHandler = () => {
    if (!message) {
        return
    }

    dispatch(sendMessage(message))
    setMessage('')
}

return (
    <div>
        <div><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea></div>
        <div><button disabled={chatStatus !== 'ready'} onClick={sendMessageHandler}>Send</button></div>
    </div>
)
}

export default ChatPage;
