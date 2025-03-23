import './App.css'
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import AboutMe from './components/about me/AboutMe';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import Cover from './components/cover/Cover';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Cover />
      <AboutMe />
      <Resume />
      <Projects />
      <Footer />
    </LanguageProvider>
  )
}

export default App
