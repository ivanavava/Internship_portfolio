//about page
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import redCircle from '../images/aboutSquareRed.png';
import yellowCircle from '../images/aboutSquareYellow.png';
import greenCircle from '../images/aboutSquareGreen.png';
import AboutWindow from '../images/AboutmeThing.svg';
import GBttn from '../images/GreenWindowBttn.svg';
import YBttn from '../images/YellowWindowBttn.svg';
import RBttn from '../images/RedWindowBttn.svg';
import TempSelfPort from '../images/TempSelfPort.svg';



//css
import '../App.css';

function About() {
    return (
        
        /*AboutMe Section*/
        <div className="AboutThing">

            {/*AboutMe background image*/}
            <img className='BackgroundAboutImg'src={AboutWindow}></img>

                {/*About me row and content*/}            
                <div className='AboutContent'>

                    <img className='SelfPortrait' src={TempSelfPort}></img>

                    {/*Column of content*/}
                    <div className='ColumnContent'>

                        {/*Row of buttons*/}
                        <div className='Buttons'>

                            <a className='Bttn1' href=''>
                                <img className='Green' src={greenCircle}></img>
                            </a>

                            <a className='Bttn2' href=''>
                                <img className='Yellow' src={yellowCircle}></img>
                            </a>

                            <Link className='Bttn3' to='/'>
                                <img className='Red'src={redCircle}></img>
                            </Link>
                        </div>

                        <h1 className='AbmeTittle'> ABOUT ME...</h1>
                        <p className='ABmeText'>
                           My name is Ivana Liza Rutazinda, and I'm an ICT student at Fontys Hogescholen in Eindhoven, the Netherlands. I specialise in both UX design and front-end development, where I enjoy blending creativity with logic to craft clean and intuitive digital experiences. Outside of tech, I love to skateboard, read, and draw—each one helps me recharge and stay inspired. I'm always exploring new tools and ideas to grow as a designer and developer.

</p>
                            
                        <button className='GotIt'>
                            <a className='LinkGotIt' href=''>GOT IT</a>
                        </button>
                    </div>



                </div>

            
                
        </div>
    );
}

export default About;
