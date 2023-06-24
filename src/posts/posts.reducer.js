import React from 'react';


    const initState = {
        status: "idle",
        errorMessage: null,
        data: [],
    }
  
  const postReducer = (state= initState, action) => {
      switch (action.type) {
          case "FETCH_POSTS_START":
              return {
                  ...state,
                  status: "pending",
              };
          case "FETCH_POSTS_SUCCESS":
              return {
                  ...state,
                  status: "success",
                  data: action.payload
              };
          case "FETCH_POSTS_FAILURE":
              return {
                  ...state,
                  status: "rejected",
                  errorMessage: action.payload,
              };
          default:
              return state;
    }
  }
  
export default postReducer;

