import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch mock data on page load
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // runs only once on page load

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch Mock Data on Page Load</h2>

      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
