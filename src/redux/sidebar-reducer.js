let initialState = {
    sidebarFriends: [
      { id: 1, name: 'Dimych', avatar: '#FF8000' },
      { id: 2, name: 'Sveta',  avatar: '#FF8000' },
      { id: 3, name: 'Andrey', avatar: '#FF8000' },
    ],
  };
const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;