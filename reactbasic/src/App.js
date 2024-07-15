import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import "./App.css";
// import styled from "styled-components";
import { List } from "antd";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:8000/api/users`)
      .then(({ data }) => setUsers(data.users))
      .catch((err) => console.log(err));

    // fetch(`http://localhost:8000/api/users`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setUsers(data.users))
    //   .catch((err) => console.log(err));
  };

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(({ data }) => setPosts(data))
      .catch((err) => console.log(err));

    // fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((err) => console.log(err));
  };

  const testFunction = () => {
    alert("this is just to test the new button function");
  };

  return (
    <div className='container'>
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}

      {users &&
        users.map((user) => (
          <div className='alert alert-primary' key={user.age}>
            {user.name} age is {user.age} years old
          </div>
        ))}

      <Button handleClick={fetchUserData} title='Fetch user data' />
      <Button handleClick={testFunction} title='Testing button' />

      <List
        bordered
        dataSource={posts}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />

      {/* {posts &&
        posts.map((post) => (
          <PostList
            // className='posts'
            // style={{
            //   backgroundColor: "indigo",
            //   color: "white",
            //   padding: "20px",
            // }}
            key={post.id}>
            {post.title}
          </PostList>
        ))} */}
    </div>
  );
};

export default App;

// const PostList = styled.div`
//   background-color: indigo;
//   color: white;
//   border: 1px solid darkgray;
//   padding: 20px;
// `;
