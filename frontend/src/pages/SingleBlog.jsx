import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const SingleBlog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState();
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getBlog = async () => {
      const res = await fetch("http://localhost:5000/api/blogs/" + id);
      const data = await res.json();
      setBlog(data);
    };
    getBlog();
  }, [id]);

  return (
    <div>
      {blog && (
        <Container>
          <div className="single-blog">
            <h1> {blog.title} </h1>
            <img
              className="imageBlog"
              src={blog && PF + blog.photo}
              alt={blog.title}
            />
            <p>{blog.description}</p>
            <p>
              {formatDistanceToNow(new Date(blog.createdAt), {
                addSuffix: true,
              })}
            </p>
            <p>Author: {blog.author}</p>
          </div>
        </Container>
      )}
    </div>
  );
};

export default SingleBlog;
