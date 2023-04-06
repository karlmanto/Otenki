import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Learn from './pages/Learn/Learn';
import QuizSelect from './pages/QuizSelect/QuizSelect';
import Hiragana from './pages/Hiragana/Hiragana';
import Katakana from './pages/Katakana/Katakana';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/quiz' element={<QuizSelect />}></Route>
          <Route path='/quiz/:characters' element={<Quiz />}></Route>
          <Route path='/learn' element={<Learn />}></Route>
          <Route path='/learn/hiragana' element={<Hiragana />}></Route>
          <Route path='/learn/katakana' element={<Katakana />}></Route>
        </Routes>
      </div >
    </BrowserRouter>
  )
}

export default App;
