
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="Container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
         <Title subTitle='Gallery' title='Campus Photos'/>
         <Campus/>
          <Title subTitle='Testimonials' title='What students say'/>
          <Testimonial/>
           <Title subTitle='Contact us' title='Get in touch'/>
           <Contact/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
