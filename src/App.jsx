import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/Shared/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

function App() {

  return (
    <div className='background-image my-height'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
