import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import { thunk, ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>; // ThunkAction<ReturnValue, AppStateType, extraArgument, ActionType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//@ts-ignore
window._store_ = store;

export default store;