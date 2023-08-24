import React from 'react';
import './Users.css'
function User({ user, deleteUser }) {
  return (
    <div className="users">
      {user.map((el) => (
        <p key={el.id}>
          {el.username} {el.email}{' '}
          <button onClick={() => deleteUser(el.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
}

export default User;
