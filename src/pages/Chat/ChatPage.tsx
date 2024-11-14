import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../redux/redux-store';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer';
import { StatusType } from '../../api/chat-api';
import styles from './ChatPage.module.scss';

const ChatPage: React.FC = () => {
  return (
    <div><Chat /></div>
  )
}

export type ChatMessageType = {
    message: string;
    photo: string;
    usedID: number;
    userName: string;
}

const Chat: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const chatStatus = useSelector((state: AppStateType) => state.chat.chatStatus);

  useEffect(() => {
    setTimeout(() => dispatch(startMessagesListening()), 500);
    return () => {
      dispatch(stopMessagesListening());
    };
  }, [dispatch]);

  return (
    <div className={styles.chatContainer}>
      {chatStatus === 'error' && <div>Some error occurred. Please refresh the page</div>}
      <>
        <Messages />
        <AddMessageForm chatStatus={chatStatus} />
      </>
    </div>
  );
}

const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.messageList} onScroll={scrollHandler}>
      {messages.map((m, index) => <Message key={m.id} message={m} />)}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
  return (
    <div className={styles.messageItem}>
      <img src={message.photo || "https://e7.pngegg.com/pngimages/277/396/png-clipart-computer-icons-user-profile-person-heroes-black.png"} alt="UserAvatar" />
      <div className={styles.messageContent}>
        <p className={styles.userName}>{message.userName}</p>
        <p className={styles.textMessage}>{message.message}</p>
      </div>
    </div>
  );
});

const AddMessageForm: React.FC<{ chatStatus: StatusType }> = ({ chatStatus }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const sendMessageHandler = () => {
    if (!message) return;
    dispatch(sendMessage(message));
    setMessage('');
  };

  return (
    <div className={styles.addMessageForm}>
      <div className={styles.textareaContainer}>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
          className={styles.textarea}
          placeholder="Enter your message..."
        ></textarea>
      </div>
      <button
        disabled={chatStatus !== 'ready'}
        onClick={sendMessageHandler}
        className={styles.sendButton}
      >
        Send
      </button>
    </div>
  );
}

export default ChatPage;
