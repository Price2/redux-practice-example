import React from 'react';


const postActionStart = (data) => {
    return (
        {
            type: "FETCH_POSTS_START",
            payload: data
        }
        );
    }
    
    const postActionSuccess = (data) => {
        return (
            {
                type: "FETCH_POSTS_SUCCESS",
                payload: data
            }
            )
        }
        
        const postActionFailure = (data) => {
            return (
                {
                    type: "FETCH_POSTS_FAILURE",
                    payload: data
                }
                )
            }
            
const fetchPosts =() => async (dispatch) => {
    dispatch(postActionStart)

    fetch("https://jsonplaceholder.typicode.com/posts").
      then((result) => result.json()).
      then((json) => dispatch(postActionSuccess(json))).
      catch((error) => dispatch(postActionFailure(error)))
}

export { fetchPosts};
