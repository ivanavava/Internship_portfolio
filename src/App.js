//change this page to your index. it will be rendered there//
import * as React from "react"
import { Link, Outlet } from "react-router-dom";
//import img from '../src/aboutbackground2.png';
import aboutFH from '../src/images/aboutmefoldershape.svg';
import Contactimg from '../src/images/ContactFolder.svg';
import Clock from '../src/components/clock.js';
import wifi from '../src/images/wifiicon.png';
import battery from '../src/images/batteryicon.png';
import About from '../src/components/about.js';
import Portfolio from '../src/components/portfolio.js';
import Resume from '../src/components/CV.js'
import Music from "./components/music.js";
import MusicIcon from '../src/images/musicicon11.svg';
import PhtoShopIcon from '../src/images/PhotoShopIcon.svg';
import PortfolioFolder from '../src/images/Portfolio.svg';
import ResumeFolder from '../src/images/Resume.svg';

//

//css
import '../src/App.css';

function App() {
  return (



    <div className="App">

      {/*--------------------------------fonts-------------------------------*/}
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"></meta>

      <link href="https://fonts.googleapis.com/css2?family=Bona+Nova:ital,wght@0,400;0,700;1,400&family=Bungee&family=Bungee+Inline&family=Bungee+Outline&family=Bungee+Shade&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Ovo&family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&family=Spline+Sans:wght@300..700&display=swap" rel="stylesheet">
      </link>
        
      {/*------------------------grey line on top (header) below ---------------------*/}
        <header className="header">
            <a className="homelink" href="/">Ivana</a>
            <a className="view" href="/">VIEW</a>
            <a className="special" href="/">SPECIAL</a>
            <a className="help" href="/">HELP</a>

            <div className="headerSecondSection">
              <img className="wifiicon" src={wifi}></img>
              <img className="batteryicon" src={battery}></img>
              <Clock className="time"/>
            </div>
           
        </header>


      {/*------------------------main content below  ---------------------*/}
        <body className="body">


      <div className='backgroundimg'>

             {/* <div className="tittle">
                
                <p className="MyName"> Hi,{<br></br>} I'm Ivana. </p>
                <p className="proffession">A visual designer with a background in ICT.</p>
                </div> 
                */}



                {/*Place the links in each link tag*/}

                <div className='RowStructure'>

                  <div className='IconFolder'>

                    <Link className="MusicIcon" to="/music">
                        <img className="Musicimg" src={MusicIcon}></img>
                        <p className="Musiclabel">Gaël Faye<br></br>Petit pays.mp3</p>
                      </Link>

                    <Link className= "PhotoShopIcon"  to= "/progress">
                        <img className="PhotoShopimg" src={PhtoShopIcon}></img>
                        <p className="PhotoShopLabel">Progress<br></br>Sofar</p>
                      </Link> 

                      <Link className="ContactFolder" to="/contact">
                          <img className="Contactimg" src={Contactimg}></img>
                          <p className="ContactLabel">CONTACT</p>
                      </Link>

                  </div>
                   
                    <div className='ThingInCenter'>
                        <Outlet />
                      </div>

                    <div className="ColumnFolder">

                      <Link className="AboutmeHome" to="/about">
                        <img className="AboutmeFolderHome" src={aboutFH}></img>
                        <p className="AboutLabel">ABOUT ME</p>
                      </Link>
                    
                      <Link className="PortfolioHome" to="/portfolio">
                      <img className="PortfolioFolderHome" src={PortfolioFolder}></img>
                      <p className="PortfolioLabel">PORTFOLIO</p>
                      </Link>

                      <Link className="ResumeHome" to="/resume">
                        <img className="ResumeFolderHome" src={ResumeFolder}></img>
                        <p className="ResumeLabel">RESUME</p>
                      </Link>

                    </div>

                   

                </div>

                
      </div>
        
       
        
         {/*------------------------footer/email thing below  ---------------------*/}
         <footer className="footer">
            <a className="email">*****  Email: ivanaliza14@gmail.com     *     Email: ivanaliza14@gmail.com    *    Email: ivanaliza14@gmail.com  *****</a>
        </footer>
            
        </body>
      </div>
          
  );
}

export default App;
