
//import { Card } from 'react-bootstrap';
import './App.css';
import TopHeader from './components/TopHeader';
import Carosual from './components/Carosual';
import Footer from './components/Footer';
import { ToastContainer} from 'react-toastify';
//import { BrowserRouter ,Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App"> 
       <ToastContainer theme='colored' position='top-center'></ToastContainer>
    <TopHeader/>
    <Carosual/>

    <Footer/>

    </div>
  );
}

export default App;
