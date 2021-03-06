const initialState = {
  logged: localStorage.getItem("logged"),
  uid: localStorage.getItem("uid"),
  token: localStorage.getItem("token"),
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        logged: true,
        uid: action.payload.user.uid,
        token: action.payload.token,
      };
    case "LOG_OUT":
      return {
        logged: false,
        uid: null,
        token: null,
      };
    default:
      return state;
  }
};

export default account;
