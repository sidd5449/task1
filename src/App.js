import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import BranchInfo from './pages/BranchInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        {/* <Route path='/:courseName' element={<BranchInfo />}/> */}
      </Routes>
    </div>
  );
}

export default App;
