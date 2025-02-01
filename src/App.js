import "./App.css";
import Footer from "./components/footer";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section5 from "./components/section5";
import Section4 from "./components/section4";
import Faqs  from './components/faqs';
import Card from './components/card';

function App() {
  return (
    <div>
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4 />
      <Section5 />
      <Faqs />
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
