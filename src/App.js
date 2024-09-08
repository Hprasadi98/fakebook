import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/messenger' element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
