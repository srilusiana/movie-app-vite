// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateMovie from './pages/Create'
import NowPlaying from './pages/NowPlaying'


function App() {
  return (
    <>
      {/* <Home /> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/create' element={<CreateMovie />}></Route>
        <Route path='/movie/now' element={<NowPlaying />}></Route>
      </Routes>
    </>
  )
}

export default App