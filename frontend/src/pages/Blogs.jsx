import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";
import londonImg from "../images/london.jpeg";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  const PF = "http://localhost:5000/images/";
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("http://localhost:5000/api/blogs/");
      const data = await res.json();

      dispatch(fetchBlogs(data));
    };
    getBlogs();
  }, [dispatch]);

  return (
    <div>
      <Container>
        <h2 className="london-blogs">London Blogs</h2>
        <img src={londonImg} className="london-img" alt="" />
        <div className="blog-card">
          {blogs &&
            blogs.map((blog) => (
              <Card key={blog._id} style={{ width: "24rem", height: "24rem" }}>
                <Card.Body>
                  {blog.photo && (
                    <Card.Img
                      variant="top"
                      className="blog-img"
                      src={PF + blog.photo}
                    />
                  )}
                  <div className="blog-content">
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>Author: {blog.author}</Card.Text>
                    <p>
                      {formatDistanceToNow(new Date(blog.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                    <Button
                      onClick={() => navigate(`/single-blog/${blog._id}`)}
                    >
                      Read Blog
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
