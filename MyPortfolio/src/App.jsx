import styles from './App.module.css'
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Hero} from "./components/hero/Hero.jsx"

function App() {

  return (
      <div className={styles.App}>
          <Navbar/>
          <Hero/>
      </div>
  )
}

export default App
