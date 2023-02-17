import React, { useState, useRef, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./create.css";
import { MdAddCircle } from "react-icons/md";
import JoditEditor from "jodit-react";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api";
// import { ToastContainer, toast } from "react-toastify";

export default function Create() {
  const initialContentpost = {
    title: "",
    description: "",
    picture: "",
    username: "",
    categories: "",
    createdDate: new Date(),
  };

  const navigate = useNavigate()

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [contentPost, setContentPost] = useState(initialContentpost);
  const [file, setFile] = useState('');

  const location = useLocation();
  const { account } = useContext(DataContext);
  const imageURL = contentPost.picture
    ? contentPost.picture
    : "https://p.bigstockphoto.com/jdVZ6zirQdGjAE2vCmmK_bigstock-A-Telltale-Sign-Of-Summer-Hyd-272112430.jpg";


  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await API.uploadFile(data);
        contentPost.picture = response.data;
      }
    };
    getImage();
    contentPost.categories = location.search?.split("=")[1] || "All";
    contentPost.username = account.username;
  }, [file, contentPost, account, location]);

  const handleChange = (e) => {
    setContentPost({ ...contentPost, [e.target.name]: e.target.value });
  };

  const contentChange = (e) => {
    setContent(e);
    setContentPost({ ...contentPost, description: e });
  };

  const savePost = async (e) => {
    e.preventDefault()
    const response =  await API.createPost(contentPost)
    if(response.isSuccess){
      navigate('/');
    }
  };
  return (
    <>
      <div className="container">
        <div className="image">
          <img src={imageURL} alt="img" />
        </div>
        <form id="first_form">
          <div className="left">
            <label title="Add your image" htmlFor="file">
              <MdAddCircle className="add_icon" />
            </label>
            <input
              type="file"
              name="bannerImage"
              id="file"
              onChange={(e) => {setFile(e.target.files[0]); e.preventDefault()}}
            />
            <input
              type="text"
              placeholder="Title......"
              required
              name="title"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button onClick={(e) => savePost(e)}>Publish</button>
        </form>
        <div className="content_editor">
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onChange={(e) => contentChange(e)}
          />
        </div>
      </div>
    </>
  );
}
