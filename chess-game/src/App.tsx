import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequiredLogin from "./shared/auth/RequiredLogin";
import RequiredAdmin from "./shared/auth/RequiredAdmin";
import Login from "./pages/login/Login";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<RequiredLogin />} >
          <Route path="/" element={<></>} />
          <Route path="/contact" element={<></>} />
  
          <Route element={<RequiredAdmin />} > 
            <Route path="/admin" element={<></>} />
          </Route>
  
          <Route path="/unauthorized" element={<></>} />
        </Route>
  
        {/* This route doesn't require login */}
        <Route path="/about" element={<></>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
