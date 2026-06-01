import Nav from "./components/Nav";
import Home from "./components/Home";
import News from "./components/News";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main id="app">
        <Home />
        <News />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
