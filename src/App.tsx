import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Card />
            <Footer />
          </>} />
        </Routes>
      </Router>
    );
}

export default App;
