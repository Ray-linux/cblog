import React, { useState, useContext, useEffect } from "react";
import dp from "../../../assets/dp.png";
import "./comment.css";
import {DataContext} from '../../../context/DataProvider'
import { API } from "../../../service/api";
import Comment_card from "./Comment_card";

export default function Comments({post}) {
  const initialComment = {
    name: "",
    postId: "",
    comments: "",
    commentDate: new Date(),
  };


  const {account} = useContext(DataContext)

  const [comment, setComment] = useState(initialComment);
  const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

  const handleChange = (e) => {
    setComment({...comment, name: account.username, postId: post._id, comments: e.target.value})
  }

  const addComment = async (e) => {
    e.preventDefault();
    const res = await API.newComment(comment);
    if(res.isSuccess){
        setComment(initialComment);
        setToggle(prev => !prev)
    }
  }

  return (
    <div className="comment_container">
      <div className="post_comments">
        <img src={dp} alt="dp" />
        <form>
          <textarea
            name="comment"
            rows="4"
            cols="100"
            placeholder="what in your mind?"
            value={comment.comments}
            onChange = {(e) => handleChange(e)}
          >
            {" "}
          </textarea>
          <button onClick={(e) => addComment(e)}>Post</button>
        </form>
      </div>
      <div className="posted_coments">
        {
            comments && comments.length > 0 ? comments.map(comment => (
                <Comment_card comment = {comment}/>
            )) : 'no comments'
        }
      </div>
    </div>
  );
}
