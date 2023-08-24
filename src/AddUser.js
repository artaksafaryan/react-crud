import React, { useState } from 'react';

function AdUsers({ addUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleAddUser = () => {
      const newUser = {
        id: Math.random(),
        username: name,
        email: email,
      };
  
      addUser(newUser);
  
      setName('');
      setEmail('');
    };
  
    return (
      <>
        <h1>React CRUD Application</h1>
        <h2>Add User</h2>
        <form className='form'>
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={(e) => { e.preventDefault(); handleAddUser(); }}>Add</button>
        </form>
        <br />
        <br />
      </>
    );
  }
  
  export default AdUsers;