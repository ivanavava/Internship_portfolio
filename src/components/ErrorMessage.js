
// Error Message
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import GBttn from '../images/GreenWindowBttn.svg';
import YBttn from '../images/YellowWindowBttn.svg';
import RBttn from '../images/RedWindowBttn.svg';



//css
import '../App.css';

function ErrorMessage() {
    return (
        <div className='ErroMessageWindow'>
            <div className='TopControls'>
                <div className='ErrorGreyBox1'></div>
                <div className='ErrorBoxTittle'>smthappened.exe error</div>
                <div className='ErrorGreyBox2'></div>
                
                <div className="EGreenYellowRed">

                        <Link className='PButtonY' to=''>
                            <img className='EBttn' src={YBttn}></img>
                        </Link>

                        <Link className='PButtonR' to='/'>
                            <img className='EBttn' src={RBttn}></img>
                        </Link>
                   
                </div>
                

            </div>

             {/*******************line****************/}
            <div className='ESeperationLine'></div>
            {/*******************line****************/}

            <div className='ErrorContent'>
                <div className='ErrorIcon'>

                </div>
                <div className='ErrorText'>
                    <div className='ErrorTittle'>Still under construction 😅 </div>
                    <div className='ErrorExplanation'>Hi. This website portfolio is still under construction as we speak. It’s a work in progress.
                    Feel free to check back later.It might be done by then. Until then, feel free to check out some of my work on the portfolio page if you’re interested.
                    </div>
                </div>


            </div>




        </div>
    );
}

export default ErrorMessage;