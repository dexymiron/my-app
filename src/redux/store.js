import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
}

export default store;
window.store = store;