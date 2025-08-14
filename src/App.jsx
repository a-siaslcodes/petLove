import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element />
        <Route path="/news" element />
        {/* <Route path="/notices" element /> find pet page  */}
        <Route path="/friends" element />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element />
      </Routes>
    </div>
  );
}

export default App;
