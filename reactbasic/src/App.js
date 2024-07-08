import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("state =>", email, password);
  };

  return (
    <div className='container'>
      <h1 className='display-4 text-center'>Learning react</h1>
      <br />

      <div className='row'>
        <div className='col-md-6 offset-md-r'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Email address</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type='email'
                className='form-control'
              />
              <div className='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Password</label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
