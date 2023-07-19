// App.js
import { lazy, Suspense } from "react";
import Header from "./components/Header";

const Sidebar = lazy(() => import("../../../components/Sidebar"));
const MainPage = lazy(() => import("../../../components/MainPage"));

function Home() {
  return (
    <div className="App">
      <Header />
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
