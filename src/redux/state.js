import {rerenderEntireTree} from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first project', likesCount: 25 },
      { id: 3, message: 'It\'s my first project', likesCount: 35 },
      { id: 4, message: 'It\'s my first project', likesCount: 45 },
    ],
    newPostText: '',

    dialogsData: [
      { id: 1, name: 'Dimych', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360'},
      { id: 2, name: 'Andrey', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
      { id: 3, name: 'Sveta',  image:'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=360' },
      { id: 4, name: 'Victor', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
      { id: 5, name: 'Valera', image:'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' }
    ]
  },
  messagesPage: {
    messagesData: [
      { id: 1, message: 'Hi'},
      { id: 2, message: 'What are you doing?' },
      { id: 3, message: 'Hey' },
      { id: 4, message: 'Hey' },
      { id: 5, message: 'Hey' }
    ]
  },
  sidebar: {
    sidebarFriends: [
      { id: 1, name: 'Dimych', avatar: '#FF8000' },
      { id: 2, name: 'Sveta',  avatar: '#FF8000' },
      { id: 3, name: 'Andrey', avatar: '#FF8000' },
    ],
  }
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0
  }; 
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;