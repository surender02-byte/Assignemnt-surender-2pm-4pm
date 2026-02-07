import { useState } from "react";

function Stat() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    isOnline: false
  });

  const updateName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const updateAge = (e) => {
    setUser({ ...user, age : e.target.value });
  };

  return (
    <div>
      <input onChange={updateName} placeholder="Name" />
      <input onChange={updateAge} placeholder="Age"/>
      <p>{user.name}</p>
      <p>Age: {user.age}</p>
      <p>Status: {user.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
export default Stat;