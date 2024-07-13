import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

export function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
        <Header />
        <Hero />
        <About />
        <GallerySection />
        <Skills />
        <Contact />
        <Footer />
        <Copyright />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
