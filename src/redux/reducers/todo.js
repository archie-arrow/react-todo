const initialState = {
  data: {},
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_FAVORITE": {
      const newItem = {
        ...state.data[action.payload],
        fav: !state.data[action.payload].fav,
      };
      const newData = { ...state.data, [action.payload]: { ...newItem } };

      return {
        ...state,
        data: newData,
      };
    }
    case "SET_DONE": {
      const newItem = {
        ...state.data[action.payload],
        done: !state.data[action.payload].done,
      };
      const newData = { ...state.data, [action.payload]: { ...newItem } };

      return {
        ...state,
        data: newData,
      };
    }
    case "DELETE_TODO": {
      const newData = { ...state.data };
      delete newData[action.payload];

      return {
        ...state,
        data: newData,
      };
    }
    default:
      return state;
  }
};

export default todo;
