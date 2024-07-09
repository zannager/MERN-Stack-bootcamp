//External API request

import { useState, useEffect } from "react";
const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchUserData = () => {
    fetch(`http://localhost:8000/api/users`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  };

  const fetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
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

      <button onClick={fetchUserData} className='btn btn-primary'>
        fetch user data
      </button>

      {posts && posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default App;
