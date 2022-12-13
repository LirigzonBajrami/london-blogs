import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { addBlog } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, description, author };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newBlog.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload/", data);
      } catch (err) {}
    }

    try {
      const res = await axios.post("http://localhost:5000/api/blogs/", newBlog);
      const data = await res.json();
      dispatch(addBlog(data));
    } catch (error) {}

    navigate("/");
  };

  return (
    <div className="form-container">
      <Container>
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <h3>Create New Blog</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label>Description</label>
          <textarea
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label>Author</label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i> Add Img
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button>Add Blog</button>
        </form>
      </Container>
    </div>
  );
};

export default CreateBlog;
