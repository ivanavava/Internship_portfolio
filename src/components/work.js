import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import GBttn from '../images/GreenWindowBttn.svg';
import YBttn from '../images/YellowWindowBttn.svg';
import RBttn from '../images/RedWindowBttn.svg';
import Save from '../images/SaveIcon.svg';
import Dropdown from '../images/dropdownfont.svg';

// Add this at the top of your file (e.g., PdfViewer.jsx or App.jsx)



import dystopy1 from '../workcontent/DystopianCurrency/1dystopy.png';
import dystopy2 from '../workcontent/DystopianCurrency/2dystopy.png';
import dystopy3 from '../workcontent/DystopianCurrency/3dystopy.png';
import dystopy4 from '../workcontent/DystopianCurrency/4dystopy.png';
import dystopy5 from '../workcontent/DystopianCurrency/5dystopy.png';
//import Work1 from '../Dystopian currency assignment.pdf'







//css
import '../App.css';

function Work() {
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
                         <img className='Page1Paper' src= {dystopy1}></img>
                         <img className='Page2Paper' src= {dystopy2}></img>
                         <img className='Page3Paper' src= {dystopy3}></img>
                         <img className='Page4Paper' src= {dystopy4}></img>
                         <img className='Page5Paper' src= {dystopy5}></img>

                    </div>

                </div>
               
            </div>
        </div>
    );
}

export default Work;