import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashbaord";
import DataBarang from "./pages/databarang/DataBarang";
import NotFound from "./pages/NotFound";
import PermintaanBarang from "./pages/PermintaanBarang";
import Login from "./pages/user/Login";

function App() {
  return (
    <>
      <div className="App max-w-full min-h-screen bg-white flex flex-row">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/databarang" element={<DataBarang />} />
          <Route path="/permintaanbarang" element={<PermintaanBarang />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
