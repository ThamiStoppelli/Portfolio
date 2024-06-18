import './App.css'
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Cover from './components/Cover';

function App() {
  return (
    <>
      <Header />
      <Cover />
      <AboutMe />
      <Resume />
      <Projects />
      <Footer />
    </>
  )
}

export default App
