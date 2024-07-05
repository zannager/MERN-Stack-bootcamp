function App() {
  return (
    <div className='container'>
      <h1 className='display-4 text-center'>Learning react</h1>
      <br />

      <div className='row'>
        <div className='col-md-6 offset-md-r'>
          <form>
            <div className='mb-3'>
              <input className='form-control' type='text' />
            </div>
            <div className='mb-3'>
              <input className='form-control' type='password' />
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
