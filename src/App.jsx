import styles from'./App.module.css'
import About from './Components/About/About'
import Expereance from './Components/Expereance/Expereance'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'


function App() {

  return <div className={styles.App}>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Expereance></Expereance>
    <Projects></Projects>
    
  </div> 
}

export default App
