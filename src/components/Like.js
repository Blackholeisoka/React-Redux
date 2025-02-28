import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/posts.actions";
import { addUserLike } from "../actions/users.actions";

const Like = ({ post }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer);
  const [IsLike, setIsLike] = useState(true)

  const handleLike = () =>{
    setIsLike(IsLike === true ? false : true);

    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      likes: IsLike === true ? post.likes + 1 : post.likes - 1,
    }

    const userData = {
      pseudo: user.pseudo,
      likes: IsLike === false ? user.likes - 1 : user.likes + 1,
      age: user.age,
      id: user.id
    }

    dispatch(addPostLike(postData))
    dispatch(addUserLike(userData))
  }
  
  return (


    <div>
      <img 
          style={{ 
            marginRight: '10px', 
            filter: IsLike === false ? 'invert(1)' : 'none' 
          }} 
          src="./icons/clap.png" 
          className="clap" 
          alt="clap" 
          onClick={handleLike} 
        />

      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
