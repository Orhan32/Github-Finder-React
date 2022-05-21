import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import axios from "axios";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = (keyword) => {
    setLoading();
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        dispatch({
          type: "SEARCH_USERS",
          payload: res.data.items,
        });
      });
  };

  const getUser = (userName) => {
    setLoading();
    axios.get(`https://api.github.com/users/${userName}`).then((res) => {
      dispatch({
        type: "GET_USER",
        payload: res.data,
      });
    });
  };

  const getUserRepo = (userName) => {
    setLoading();
    axios.get(`https://api.github.com/users/${userName}/repos`).then((res) => {
      dispatch({
        type: "GET_USER_REPOS",
        payload: res.data,
      });
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
