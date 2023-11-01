import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Main from "./pages/Main";
import Sent from "./Sent";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/:name/:id" element={<Main />} />
            <Route path="/:name/:id/new" element={<Sent />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
