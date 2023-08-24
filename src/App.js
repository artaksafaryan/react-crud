import React, { useState, useEffect } from 'react';
import User from './User';
import AdUsers from './AddUser';
import './App.css'
function App() {
  const [user, setUser] = useState([]);

  useEffect(function () {
    let URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  const addUser = (newUser) => {
    setUser([...user, newUser]);
  };


  const deleteUser = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          const updatedUsers = user.filter((u) => u.id !== userId);
         
          setUser(updatedUsers);
        } else {
          console.error('Failed to delete user:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
  

  return (
    <div className="App">
      <AdUsers addUser={addUser} />
      <User user={user} deleteUser={deleteUser} />
    </div>
  );
}

export default App;


