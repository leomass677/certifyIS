import "./App.css";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Feature from "./component/Feature";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import Home from "./component/Home";
import ContactUs from "./component/ContactUs";

function App() {
  return (
    <>
      <main className="font-inter max-w-[1440px]">
        <section className="flex flex-col">
          <Navbar />
          <Home />
          <Services />
          <Feature />
          <AboutUs />
          <ContactUs />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
