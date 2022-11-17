import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

import axios from "axios";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchData = async () => {
    const { data } = await axios.get("/api/blogs");
    setBlogs(data);
  };

  console.log(blogs);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainScreen title="Welcome back NituDubey....">
      <Link to="createBlog">
        <Button size="lg" style={{ marginLeft: 10, marginBottom: 6 }}>
          Create new blog
        </Button>
      </Link>
      {blogs.map((blog) => (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    fontSize: 18,
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                  }}
                >
                  <Accordion.Header>{blog.title}</Accordion.Header>
                </span>
                <div>
                  <Button href={`/blog/${blog._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(blog._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category - {blog.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{blog.content}</p>
                    <footer className="blockquote-footer">
                      Created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyBlog;
