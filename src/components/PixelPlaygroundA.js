
// Pixel Playground assignment
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import GBttn from '../images/GreenWindowBttn.svg';
import YBttn from '../images/YellowWindowBttn.svg';
import RBttn from '../images/RedWindowBttn.svg';
import Save from '../images/SaveIcon.svg';
import Dropdown from '../images/dropdownfont.svg';

// Add this at the top of your file (e.g., PdfViewer.jsx or App.jsx)



import figport1 from '../workcontent/PixelPlayground/Pixel Playground Cover.png';
import figport2 from '../workcontent/PixelPlayground/Pixel PlaygroundIntro.png';
import figport3 from '../workcontent/PixelPlayground/Pixel Playground2.png';
import figport4 from '../workcontent/PixelPlayground/Pixel Playground3.png';
import figport5 from '../workcontent/PixelPlayground/Pixel Playground4.png';
//import Work1 from '../Dystopian currency assignment.pdf'







//css
import '../App.css';

function PixelPlayground() {
    return (
        <div className='WorkTextWindow'>
            <div className='TopControls'>
                <label className='TopText1'>File</label>
                <label className='TopText2'>About</label>
                <label className='TopText3'>Version</label>
                <div className='GreyBox1'></div>
                <div className='WorkBoxTittle'>Words-Tittle</div>
                <div className='GreyBox2'></div>
                <div className="WGreenYellowRed">
                        <Link className='PButtonG' to=''>
                            <img className='PBttn' src={GBttn}></img>
                        </Link>

                        <Link className='PButtonY' to=''>
                            <img className='PBttn' src={YBttn}></img>
                        </Link>

                        <Link className='PButtonR' to='/'>
                            <img className='PBttn' src={RBttn}></img>
                        </Link>
                   
                </div>

            </div>

            <div className='SeperationLine'></div>
            {/*******************seondline of controls****************/}
            <div className='SecondControls'>
                <Link className='SaveWork'>
                    <img className='SaveIcon' src={Save}></img>
                </Link>
                <div className='Septext1'></div>

                <div className='FontDeco'>
                    <label className='Font'>Calibri</label>
                    <img className='DropDownF' src={Dropdown}></img>
                </div>

                <div className='FontSize'>
                    <label className='FSize'>11</label>
                    <img className='DropDownS' src={Dropdown}></img>
                </div>

                <div className='Septext2'></div>

                <div className='BoldItalicUnderlined'>
                    <Link className='Bold' to="">B</Link>
                    <Link className="Italic" to="">I</Link>
                    <Link className="Underlined" to="">U</Link>
                </div>



                <div className='Septext3'></div>
                
                <div className='Septext4'></div>
            </div>

            {/*******************line****************/}
            <div className='SeperationLine2'></div>
            <div className='TextBackground'>
                <div className='BackgroundColumn'>
                     <div className='Paper'>
                         <img className='Page1Work2' src= {figport1}></img>
                         <img className='Page2Work2' src= {figport2}></img>
                         <img className='Page3Work2' src= {figport3}></img>
                         <img className='Page4Work2' src= {figport4}></img>
                         <img className='Page5Work2' src= {figport5}></img>
                    </div>

                </div>
               
            </div>
        </div>
    );
}

export default PixelPlayground;