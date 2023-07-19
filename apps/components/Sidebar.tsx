"use client";
// Sidebar.js
import { useState, useEffect } from "react";

function Sidebar() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "10px",
        width: "200px",
        height: "100vh",
        border: hydrated ? "2px solid red" : "none",
      }}
    >
      <h2>This is the Sidebar</h2>
    </div>
  );
}

export default Sidebar;
