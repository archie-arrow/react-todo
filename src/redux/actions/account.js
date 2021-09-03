const setLogged = (payload) => ({
  type: "LOG_IN",
  payload,
});

const setLogout = () => ({
  type: "LOG_OUT",
});

export { setLogged, setLogout };
