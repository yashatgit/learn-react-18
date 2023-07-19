import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "./header";

const Sidebar = dynamic(() => import("../../../../components/Sidebar"));
const MainPage = dynamic(() => import("../../../../components/MainPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header..</div>}>
        <Header />
      </Suspense>
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

export default App;
