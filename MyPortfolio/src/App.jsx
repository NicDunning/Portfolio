import styles from './App.module.css'
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Hero} from "./components/hero/Hero.jsx"
import {About} from "./components/about/About.jsx";
import {Experience} from "./components/experience/Experience.jsx";

function App() {

  return (
      <div className={styles.App}>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
      </div>
  )
}

export default App
