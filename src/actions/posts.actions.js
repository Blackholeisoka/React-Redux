import axios from "axios";

export const GET_POSTS =  "GET_POSTS";
export const ADD_POSTS = "ADD_POST";
export const EDIT_POSTS = "EDIT_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";
export const ADD_POSTS_LIKE = "ADD_POSTS_LIKE";

export const getPost = () =>{
    return (dispatch) => {
        return axios.get("http://localhost:5000/posts").then(response =>{
          dispatch({type: GET_POSTS, payload: response.data});
        })
    }
}

export const addPost = (data) =>{
  return (dispatch) => {
      return axios.post("http://localhost:5000/posts", data).then(response =>{
        dispatch({type: ADD_POSTS, payload: data});
      })
  }
}

export const editPost = (data) =>{
  return (dispatch) => {
      return axios.put(`http://localhost:5000/posts/${data.id}`, data).then(response =>{
        dispatch({type: EDIT_POSTS, payload: data});
      })
  }
}

export const addPostLike = (data) =>{
  return (dispatch) => {
      return axios.put(`http://localhost:5000/posts/${data.id}`, data).then(response =>{
        dispatch({type: ADD_POSTS_LIKE, payload: data});
      })
  }
}

export const deletePost = (postId) =>{
  return (dispatch) => {
      return axios.delete(`http://localhost:5000/posts/${postId}`).then(response =>{
        dispatch({type: DELETE_POSTS, payload: postId});
      })
  }
} 