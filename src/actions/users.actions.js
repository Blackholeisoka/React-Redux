import axios from "axios";

export const GET_USER =  "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () =>{
    return (dispatch) => {
        return axios.get("http://localhost:5000/user").then(response =>{
          dispatch({type: GET_USER, payload: response.data[0]});
        })
    }
}

export const addUserLike = (data) =>{
    return (dispatch) => {
        return axios.put(`http://localhost:5000/user/${data.id}`, data).then(response =>{
          dispatch({type: ADD_USER_LIKE, payload: data});
        })
    }
}