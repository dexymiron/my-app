const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsType = {
  id:number
  message: string
  image?: string
  name?:string
}

let initialState = {
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'What are you doing?' },
    { id: 3, message: 'Hey' },
    { id: 4, message: 'Hey' },
    { id: 5, message: 'Hey' }
  ] as Array<DialogsType>,
  
  dialogsData: [
    { id: 1, name: 'Dimych', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
    { id: 2, name: 'Andrey', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
    { id: 3, name: 'Sveta', image: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=360' },
    { id: 4, name: 'Victor', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' },
    { id: 5, name: 'Valera', image: 'https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360' }
  ] as Array<DialogsType>, 
}

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action:any):initialStateType => { 
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody:string) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
