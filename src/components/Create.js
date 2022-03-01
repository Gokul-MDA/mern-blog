import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/Create.css";

function Create() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();

  const submitForm = () => {
    axios
      .post("http://localhost:5000/core/create", { title, content, author })
      .then((response) => console.log(response.status));
  };
  return (
    <div>
      <div className="create-container">
        <form>
          <input
            className="input-title"
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <br />
          <input
            className="input-title"
            name="content"
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <br />
          <input
            className="input-title"
            name="author"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <br />
          <button onClick={submitForm}>Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
