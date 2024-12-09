export const usersInitialState = {
    user: {},
    isUserLoggedIn: false,
    likes: [],
  };
  
  export const usersReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.payload.user,
          isUserLoggedIn: true,
        };
  
      case "LIKES_STATUS":
        return {
          ...state,
          likes: action.payload.likes,
        };
  
      case "REGISTER":
      return { 
        ...state,
        user: action.payload.user,
      };


      case "LOGOUT":
        return usersInitialState;
  
      default:
        return state;
    }
  };
  