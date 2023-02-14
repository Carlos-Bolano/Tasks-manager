import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Error404 from "./pages/Error404"

import LayoutHome from './layouts/LayoutHome'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<LayoutHome />}>
        </Route>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
