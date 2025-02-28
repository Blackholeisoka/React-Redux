import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPost } from "../actions/posts.actions";

const PostForm = () => {
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  const form = useRef()
  
  const handleForm = async (e) =>{
    e.preventDefault();
    
    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    }

    await dispatch(addPost(postData));
    dispatch(getPost());
    form.current.reset();
  }

  return (
    <div className="form-container">
      <form ref={form} onSubmit={((e) => handleForm(e))} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column"}}>
        <input type="text" placeholder="Title here..." required autoComplete="off"/>
        <textarea placeholder="Your post here..." required autoComplete="off"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default PostForm;
