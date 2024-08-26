const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'What are you doing?' },
    { id: 3, message: 'Hey' },
    { id: 4, message: 'Hey' },
    { id: 5, message: 'Hey' }
  ],
  
  dialogsData: [
    { id: 1, name: 'Dimych', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
    { id: 2, name: 'Andrey', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
    { id: 3, name: 'Sveta', image: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=360' },
    { id: 4, name: 'Victor', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
    { id: 5, name: 'Valera', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' }
  ], 
}

const dialogsReducer = (state = initialState, action) => { 
  switch (action.type) {
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 6, message: body}]
      };
      
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
