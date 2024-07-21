const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first project', likesCount: 25 },
        { id: 3, message: 'It\'s my first project', likesCount: 35 },
        { id: 4, message: 'It\'s my first project', likesCount: 45 },
      ],
      newPostText: ''
    },

    messagesPage: {
      messagesData: [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'What are you doing?' },
        { id: 3, message: 'Hey' },
        { id: 4, message: 'Hey' },
        { id: 5, message: 'Hey' }
      ],
      
      dialogsData: [
        { id: 1, name: 'Dimych', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360'},
        { id: 2, name: 'Andrey', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
        { id: 3, name: 'Sveta',  image:'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=360' },
        { id: 4, name: 'Victor', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
        { id: 5, name: 'Valera', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' }
      ],

      newMessageBody: ""
    },
    sidebar: {
      sidebarFriends: [
        { id: 1, name: 'Dimych', avatar: '#FF8000' },
        { id: 2, name: 'Sveta',  avatar: '#FF8000' },
        { id: 3, name: 'Andrey', avatar: '#FF8000' },
      ],
    }
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
    
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }; 
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state); 
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.messagesPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
        let body = this._state.messagesPage.newMessageBody;
        this._state.messagesPage.newMessageBody= '';
        this._state.messagesPage.messagesData.push({id: 6, message: body});
        this._callSubscriber(this._state);
      }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => 
  ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;