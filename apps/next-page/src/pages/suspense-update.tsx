// App.js
import { lazy, Suspense, startTransition } from "react";
import { useState } from "react";

const Header = ({ setCount, count }) => {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: "10px",
      }}
    >
      <p>Clicked {count} times.</p>
      <button
        onClick={() => {
          setCount((prev: number) => prev + 1);

          // startTransition(() => {
          //   setCount((prev: number) => prev + 1);
          // });
        }}
      >
        Update state
      </button>
    </div>
  );
};

const ssr = typeof window === "undefined";
const Sidebar = lazy(() =>
  ssr
    ? import("../../../components/Sidebar")
    : new Promise((resolve) =>
        //@ts-ignore
        setTimeout(() => resolve(import("../../../components/Sidebar")), 2000)
      )
);
const MainPage = lazy(() =>
  ssr
    ? import("../../../components/MainPage")
    : new Promise((resolve) =>
        //@ts-ignore
        setTimeout(() => resolve(import("../../../components/MainPage")), 4000)
      )
);

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header setCount={setCount} count={count} />
      <div style={{ display: "flex" }}>
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<div>Loading MainPage...</div>}>
          <MainPage />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
