import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/Create.css";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

function Create() {
  const navigate = useNavigate();
  const id = localStorage.getItem("token");

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState([]);

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const blogData = new FormData();
    blogData.append("title", title);
    blogData.append("content", content);
    blogData.append("image", image);

    axios
      .post(`http://192.168.43.198:5000/core/${id}/create/`, blogData)
      .then((response) => console.log(response.status))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="create-nav"></div>
      <div className="create-container">
        <form encType="multipart/form-data" onSubmit={submitForm}>
          <TextareaAutosize
            className="input-title"
            placeholder="Title"
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />
          <TextareaAutosize
            className="input-content"
            placeholder="Tell your Story"
            name="content"
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />

          <br />
          <input
            type="file"
            name="filename"
            accept="image/*"
            onChange={onChangeImage}
          />
          <br />
          <br />
          <button type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
