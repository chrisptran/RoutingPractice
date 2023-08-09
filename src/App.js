import { Route, Routes } from 'react-router-dom';
import './App.css';
import Keyword from './views/Keyword';

const Home = () => {
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:keyword/" element={<Keyword />} />
        <Route path="/:keyword/:color/:backgroundColor" element={<Keyword />} />
      </Routes>
    </div>
  );
}

export default App;
