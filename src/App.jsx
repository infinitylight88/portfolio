import styles from'./App.module.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'


function App() {

  return <div className={styles.App}>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    
  </div> 
}

export default App
