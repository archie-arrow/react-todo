const setData = (payload) => ({
  type: "SET_DATA",
  payload,
});

const setFavorite = (todoId) => ({
  type: "SET_FAVORITE",
  payload: todoId,
});

const setDone = (todoId) => ({
  type: "SET_DONE",
  payload: todoId,
});

const deleteTodo = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});

export { setData, setFavorite, setDone, deleteTodo };
