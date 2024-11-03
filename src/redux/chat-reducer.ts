import { ChatMessageAPIType } from './../api/chat-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { chatAPI, StatusType } from '../api/chat-api';
import { Dispatch } from "redux";
import { v1 } from 'uuid';

type ChatMessageType = ChatMessageAPIType & { id: string }

let initialState = {
    messages: [] as ChatMessageType[],
    chatStatus: 'pending' as StatusType
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({ ...m, id: v1() }))]
                    .filter((m, index, array) => index >= array.length - 100)
            };
        case 'SN/chat/STATUS_CHANGED':
            return {
                ...state,
                chatStatus: action.payload.status
            };
        case 'SN/chat/CLEAR_MESSAGES':
            return {
                ...state,
                messages: []
            };
        default:
            return state;
    }
};

export const actions = {
    messagesReceived: (messages: ChatMessageAPIType[]) => ({ type: 'SN/chat/MESSAGES_RECEIVED', payload: { messages } } as const),
    statusChanged: (status: StatusType) => ({ type: 'SN/chat/STATUS_CHANGED', payload: { status } } as const),
    clearMessages: () => ({ type: 'SN/chat/CLEAR_MESSAGES' } as const)
}

let _newMessageHandlerCreator: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandlerCreator === null) {
        _newMessageHandlerCreator = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandlerCreator;
}


let _statusChangedHandler: ((messages: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler;
}



export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('message-received', newMessageHandlerCreator(dispatch));
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch));
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatAPI.stop()
    dispatch(actions.clearMessages());
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
};


export default chatReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
