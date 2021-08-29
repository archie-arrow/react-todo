const initialState = {
  logged: false,
  info: {
    user: null,
    token: null,
  },
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        logged: true,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default account;
