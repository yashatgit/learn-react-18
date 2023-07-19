// App.js
import { lazy, Suspense } from "react";
import { Links } from "./components/Links";
import Header from "../../../components/Header";
import dynamic from "next/dynamic";

const ssr = typeof window === "undefined";

const Sidebar = dynamic(() => import("../../../components/Sidebar"), {
  suspense: true,
  ssr: false,
});

const MainPage = lazy(() =>
  ssr
    ? import("../../../components/MainPage")
    : new Promise((resolve) =>
        //@ts-ignore
        setTimeout(() => resolve(import("../../../components/MainPage")), 4000)
      )
);

function Home() {
  return (
    <div className="App">
      <Header>
        <Links />
      </Header>
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
