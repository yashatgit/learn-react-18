import React from "react";

const timeNow = ""; //new Date().toString();
function Header({ children }: { children?: React.ReactElement }) {
  const hydrated = false;

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: "10px",
        border: hydrated ? "2px solid red" : "none",
      }}
    >
      <h1>This is the Header</h1>
      {children}
    </div>
  );
}

export default Header;
