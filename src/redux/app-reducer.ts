import { getAuthUserData } from "./auth-reducer";
import { InferActionsTypes } from "./redux-store";


export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

let initialState = {
  initialized: false,
};



const appReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};



const actions = {
  initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const),
}


export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => { });
  dispatch(actions.initializedSuccess());
};





export default appReducer;
