import './App.css';
import "../src/eNno/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../src/eNno/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../src/eNno/assets/vendor/boxicons/css/boxicons.min.css"
import "../src/eNno/assets/vendor/glightbox/css/glightbox.min.css"
import "../src/eNno/assets/vendor/swiper/swiper-bundle.min.css"
import "../src/eNno/assets/css/style.css"
import Footer from './Components/footer';
import { Outlet } from 'react-router-dom';


function App() {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    );
  }
  
  export default App;