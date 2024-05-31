import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './components/home';
import Appointment  from './components/Appointment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route path='' element={<Home></Home>} />
            <Route path='/appointment' element={<Appointment></Appointment>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
