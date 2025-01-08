import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GlamSegment from '../components/GlamSegment';
import SidePanel from '../components/SidePanel';
import logo from '../images/ngs_arks_logo.png'
import banner from '../images/PSO2_NGS_Banner_1.jpeg'
import ScrollToTop from '../ScrollToTop';

function Home() {
    return (
        <div className="App">
            {/* <Navbar/>
            <header className="App-header">
                <div className="banner">
                    <div className="banner_content">
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="main_main">
                    
                    <GlamSegment main={true}/>
                </div>
            </main>
            <ScrollToTop/> */}
            <div className="bodyBox">
              <div className='loader'/>
            </div>
            <div className="text">Under Construction</div>
        </div>
    );
}

export default Home