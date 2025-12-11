import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    const res = await fetch("http://localhost:5000");
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      <h1>AI Agent Dashboard</h1>
      <button onClick={callBackend}>
        Test Backend
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;
