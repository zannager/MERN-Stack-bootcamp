//Rendering data

import { useState } from "react";
const App = () => {
  const [users, setUsers] = useState([]);
  const fechUserData = () => {
    fetch(`http://localhost:8000/api/users`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data.users))
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

      <button onClick={fechUserData} className='btn btn-primary'>
        fetch user data
      </button>
    </div>
  );
};

export default App;
