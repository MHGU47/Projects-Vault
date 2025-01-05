import '../App.css';
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';
import LookBreakdown from '../components/LookBreakdown';
import styles from './CSS/Looksbook.module.css'
import ScrollToTop from '../ScrollToTop';
import projects from '../projects.json'
import { useLocation, Navigate } from 'react-router-dom'

function Looksbook() {
  const location = useLocation();
  
  // Add safety check for state
  if (!location.state || !location.state.info) {
    return <Navigate to="/" replace />;  // Redirect to home if no data
  }

  const { info } = location.state;
  
  return (
    <div className="App">
      <Navbar/>
      <main className={styles.main_main}>
        <div className={styles.main_alt}>
          <LookBreakdown info={info}/>
        </div>
      </main>
      <ScrollToTop/>
    </div>
  );
}

export default Looksbook;
