"use client";
import { useState, useEffect } from "react";
// MainPage.js
function MainPage() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        padding: "10px",
        flexGrow: 1,
        border: hydrated ? "2px solid red" : "none",
      }}
    >
      <h2>This is the MainPage</h2>
    </div>
  );
}

export default MainPage;
