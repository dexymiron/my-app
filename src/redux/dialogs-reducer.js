const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          state.newMessageBody = action.body;
        } 
        
        else if (action.type === SEND_MESSAGE) {
          let body = state.newMessageBody;
          state.newMessageBody= '';
          state.messagesData.push({id: 6, message: body});
        }

    return state;

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;