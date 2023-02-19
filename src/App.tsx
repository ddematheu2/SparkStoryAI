import React, { useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BookCreator } from './utils';
import CreateBookForm from './CreateBookForm';
import Header from './Header';

function App() {

  const [user, setUser] = useState<BookCreator>();
  const [userCreated, setUserCreated] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [url, setURL] = useState();
  
  useEffect(() => {
    if (user) {
      setWaiting(true);
      fetch('http://localhost:7071/api/createBook', {
        method: "POST",
        body : JSON.stringify(user),
      })
      .then(response => response.json())
      .then(json => {
        setWaiting(false);
        setURL(json.Url);
      })
    }
  }, [user]);

  return (
    <>
      <Header />
      <div className='Parent'>
        {url && <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h2>Click the link to download your story:</h2>
          <br/>
          <a href={url} ><strong><button className="btn btn-primary">Download</button></strong></a>
        </div>}
        {waiting && <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2>Creating your story!</h2>
          <br/>
          <div className="text-center">
            <div className="spinner-border" role="status" style={{width:'5rem', height: '5rem'}}> 
              <span className="sr-only"></span>
            </div>
          </div>
        </div>}
        {!user && <CreateBookForm setUser={setUser} />}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        </div>
    </>
  );
}

export default App;
