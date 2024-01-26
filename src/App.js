import './App.css';
import { Analytics } from './Components/Analytics';
import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';
import { NewsLetter } from './Components/NewsLetter';
import { Cards } from './Components/Cards';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
