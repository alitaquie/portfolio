
import Services from './sections/services/Services';
import Header from './sections/header/Header';
import Navbar from './sections/navbar/Navbar';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Footer from './sections/footer/Footer';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Testimonials from './sections/testimonials/Testimonials';
import FloatingNav from './sections/floating-nav/FloatingNav';


const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Footer/>
      <FAQs/>
      <Contact/>
      <Testimonials/>
      <FloatingNav/>

    </main>
  )
}

export default App