import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Menu from './Components/Menu'
// import About from './Components/About'
import Footer from './Components/Footer'
// import BasicButtons from './Components/BasicButtons';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      {/* <BasicButtons /> */}
      {/* <About /> */}
      <Footer />



    </div>
  );
}

export default App;