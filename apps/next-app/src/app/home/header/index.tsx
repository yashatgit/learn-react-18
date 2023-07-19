import React from "react";

export const revalidate = 0;

const fetchHeaderLink = () =>
  new Promise((resolve) => setTimeout(() => resolve("Link1, Link2"), 4000));

export default async function () {
  const headerLinks = (await fetchHeaderLink()) as string;

  return (
    <div
      style={{
        backgroundColor: "skyblue",
      }}
    >
      <h1>This is the Header</h1>
      <p>Async Data: {headerLinks}</p>
    </div>
  );
}
