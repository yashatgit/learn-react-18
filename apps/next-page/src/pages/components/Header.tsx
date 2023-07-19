// Header.js
import { useState, useEffect } from "react";

const timeNow = 2;

function Header() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: "10px",
        border: hydrated ? "2px solid red" : "none",
      }}
    >
      <p>Time now is:{timeNow}</p>
    </div>
  );
}

export default Header;
