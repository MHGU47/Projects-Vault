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
            <Navbar/>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div className="banner">
                    <div className="banner_content">
                        {/* <div>
                            NGS Looksbook Collection (Totally not an Eorzea Collection clone...)
                        </div> */}
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="main_main">
                    {/* <Hero/> */}
                    <GlamSegment main={true}/>
                </div>
                {/* <div className="main_side">
                    <SidePanel/>
                </div> */}
            </main>
            {/* <Footer/> */}
            <ScrollToTop/>
        </div>
    );
}

export default Home