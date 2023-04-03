import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Learn from './pages/Learn/Learn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/learn' element={<Learn />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
