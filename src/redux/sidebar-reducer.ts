type sideBarFriendsType = {
  id: number
  name: string
  avatar: string
}

let initialState = {
    sidebarFriends: [
      { id: 1, name: 'Dima', avatar: '#FF8000' },
      { id: 2, name: 'Sveta',  avatar: '#FF8000' },
      { id: 3, name: 'Alex', avatar: '#FF8000' },
    ] as Array<sideBarFriendsType>,
};

type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action:any):InitialStateType => {
    return state;
};

export default sidebarReducer;