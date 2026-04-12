import React from 'react'

function App() {
  const usersData = [
  {
    id: 1,
    username: "Ahmed Ali",
    email: "ahmed@gmail.com",
    phone: "01000000000",
    birthdate: "1999-05-10",
    role: "admin",
  },
  {
    id: 2,
    username: "Sara Mohamed",
    email: "sara@gmail.com",
    phone: "01111111111",
    birthdate: "2000-03-15",
    role: "user",
  },
  {
    id: 3,
    username: "Omar Khaled",
    email: "omar@gmail.com",
    phone: "01222222222",
    birthdate: "1998-07-20",
    role: "moderator",
  },
];


  return (
    <>
    <div>User list</div>
      <div>{usersData}</div>
    </>
  )
}

export default App
