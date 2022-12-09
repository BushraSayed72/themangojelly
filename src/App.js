import Navbar from './Components/Navbar';
import Oppo from './Components/Oppo';
import Main from './Components/Main';
import Redmi from './Components/Redmi';
import Nine from './Components/Nine';
import Vivo from './Components/Vivo';
import Poco from './Components/Poco';
import { Route, Routes} from "react-router-dom";
import './App.css';
import Buynow from './Components/Images/Buynow';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Main/>}/>
        <Route path="/poco" element={<Poco/>} />
        <Route path="/oppo" element={<Oppo/>} />
        <Route path="/redmi" element={<Redmi/>} />
        <Route path="/vivo" element={<Vivo/>} />    
        <Route path="/nine" element={<Nine/>} /> 
        <Route path="/Buynow" element={<Buynow/>} />         
</Routes>
  
    </>
  );
}

export default App;
