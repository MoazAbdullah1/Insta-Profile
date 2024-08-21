import Blogs from "./components/Blogs"
import Nabvaar from "./components/Nabvar"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Router>
      <Nabvaar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
