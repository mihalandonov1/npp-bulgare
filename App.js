import Navbar from './Navbar';
import Header from './Header';
import Info from './Info'
import Structure from './Structure';
import Ustav from './Ustav';
import Footer from './Footer';
import Otcheti from './Otcheti';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Info/>
      <Structure/>
      <Ustav/>
      <Otcheti/>
      <Footer/>
    </div>
  );
}

export default App;
