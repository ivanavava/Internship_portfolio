import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ContactWindow from '../images/ContactPage.svg';
import CGBttn from '../images/ContactGBTN.svg';
import CYBttn from '../images/ContactYBTN.svg';
import CRBttn from '../images/ContactRBTN.svg';
import MsgIcon from '../images/NewMessageIcon.svg';
import pin from '../images/PinIcon.svg';
import SrchIcon from '../images/SearchIcon.svg'
import Memeimg from '../images/contactmeme.webp'
import attachIcon from '../images/attachIcon.svg';
import send from '../images/paperplane.svg';
import Star from '../images/Star.svg'
import info from '../images/info.svg'
import tryscroll from '../images/TryThisContactScroll.svg'








//css
import '../App.css';


function submit_form() {
    const form = document.getElementById("form"); // Ensure your form has this ID
    if (form) {
        form.submit();
        form.reset();
    } else {
        console.error("Form not found!");
    }
}


function Contact(){
    return(
        <div className='ContactThing'>

            <img className='ContactBackground' src={ContactWindow} />
            <div className='ContactOverlay'>

                {/*Page buttons*/}

                <div className='ContactButtons'>
                    <a className='CButtonG' href=''>
                        <img className='CBttn' src={CGBttn}></img>
                    </a>

                    <a className='CButtonY' href=''>
                        <img className='CBttn' src={CYBttn}></img>
                    </a>

                    <Link className='CButtonR' to='/'>
                        <img className='CBttn' src={CRBttn}></img>
                    </Link>

                </div>

                <div className='ContactSepThing'></div>

                  {/*Everything on the window image is organised into a row with two different columns.*/}
                <div className='ContactRow'>

                        <div className='MessageColumn'>

                            {/*new message and serch function*/}
                            <div className='NewMsgnSearch'>

                                {/*new message icon/link*/}
                                <div className='Nmessage'>
                                    <a className='NewMessage' href=''>
                                            <img className="NMIcon" src={MsgIcon}></img>
                                    </a>
                                </div>

                                {/*search function*/}
                                <div className='SearchFunction'>
                                    <form className='searchinput'>
                                        <input className='SearchBar' type='text' placeholder='Search'></input>
                                            <submit classname="SIconThing">
                                                <img className='SearchIcon' src={SrchIcon}></img>
                                            </submit>
                                    </form>
                                        
                                </div>

                            </div>

                            {/*Past messages*/}
                            <div className='Mssgs'>

                                {/*First Past message sent by Ivana*/}
                                <a className='PreviousMessage1' href="">
                                    <span className='FirstmsgnIcon'>
                                        <p className='MessangerName'>Ivana Liza Rutazinda</p>
                                        <img className="PinIcon" src={pin}></img>
                                        <p className='MessageSentDate'>9 Dec</p>
                                    </span>

                                    <p className='MMessage1'>Let me know..</p>
                                        
                                </a>

                                {/*Secon past Message sent by Vava*/}
                                <a className='PreviousMessage2'>
                                    <span className='FirstmsgnIcon'>
                                        <p className='MessangerName'>Vava</p>
                                        <p className='MessageSentDate2'>9 Dec</p>
                                    </span>
                                    <p className='MMessage2'>Let me know..</p>
                                </a>

                                {/*No more messages section*/}
                                <div className='NomoreMsgs'>
                                    <p className='NoMore'>No messages</p>
                                    <p className='Invisible'><br/></p>
                                </div>


                            </div>
                           

                        </div> 
                    </div> 

                </div>

            

        </div>
            );

} export default Contact;