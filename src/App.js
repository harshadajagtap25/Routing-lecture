import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RequireAuth from './hoc/RequireAuth';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/feed" element={
          <RequireAuth>
            <Feed />
          </RequireAuth>} />
          
        <Route path='/posts' element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        } />
      </Routes>

    </div >
  );
}

export default App;
