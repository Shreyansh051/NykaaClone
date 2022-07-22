import './App.css';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/Navbar/MainNavbar';
import Products from './components/Product page/Products';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
