
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ResumeWindow from '../images/ResumeThing.svg';
import RGBttn from '../images/ResumeGreenBtn.svg';
import RYBttn from '../images/ResumeYellowBtn.svg';
import RRBttn from '../images/ResumeRedBtn.svg';

//css
import '../App.css';



function Resume(){
    return(

       <div className='ResumeThing'>
            {/*Background image*/}
            <img className='BackgroundResumeImg'src={ResumeWindow}></img>
            <div className='ResumeContentColumn'>
                <div className='ResumeButtons'>

                        <a className='RButtonG' href=''>
                            <img className='RBttn' src={RGBttn}></img>
                        </a>

                        <a className='RButtonY' href=''>
                            <img className='RBttn' src={RYBttn}></img>
                        </a>

                        <Link className='RButtonR' to='/'>
                            <img className='RBttn' src={RRBttn}></img>
                        </Link>

                    </div>


                <div className='ResumeContentRow'>

                    <div className='ResumePDF'></div>

                    <div className='ResumeLeftColumn'>

                        <h1 className='ResumeTittle'>Experience</h1>



                        {/***************************Text under experience************************/}
                        <p className='ResumeText'>
                        I’m interested in opportunities that focus on creative problem-solving, user-centered design, and collaborative work environments where I can learn and contribute more
                        </p>

                        {/*text in condition box*/}
                        <div className='ResumeConditionBox'>
                            <p className='ConditionBoxText'>TERMS AND CONDITIONS – DESIGN-LEANING INTERNSHIP PREFERENCES
PLEASE READ CAREFULLY BEFORE OFFERING ANY OPPORTUNITY <br/><br/>

I am currently seeking a creative and collaborative internship or opportunity that prioritizes growth, mentorship, and hands-on learning—particularly in the fields of UX and UI design. The ideal position should allow me to actively contribute to real-world projects that require more than just repetitive or routine tasks. I’m looking for an environment where original ideas are encouraged, challenged, and improved through discussion and teamwork.

Although I enjoy working on the front end and translating designs into responsive interfaces, my strongest interest lies in the creative and strategic aspects of the design process. I want to be deeply involved in ideation, research, wireframing, prototyping, and user testing—where every design decision is backed by purpose and empathy. The opportunity should allow me to think critically and solve real problems creatively, with an emphasis on creating seamless and impactful user experiences.

Collaboration is an essential component of my preferred working environment. I thrive when surrounded by people who challenge me, share feedback, and welcome open discussions. I want to contribute ideas, present work, and learn from experienced designers and developers who are open to mentoring and sharing their expertise.

By offering such an opportunity, you acknowledge and agree that I will bring curiosity, creativity, and dedication to the team. In return, I hope to gain exposure to professional design processes, improve my skills, and grow into a confident, thoughtful designer with a strong foundation in both UX and front-end development.

Let me know if you want a version that feels even more tongue-in-cheek legalese, or one that includes bullet points like a proper contract clause set!


</p>
                        </div>

                            <form className='RadioButtonsColumn' action="" >
                                <div className='radioblock1'> 
                                    <input className='ResumeChecking' type="radio" value='Checking out'></input>
                                    <label className='ResumeOpt'> Just checking out the page</label>
                                </div>

                                <div className='radioblock2'>
                                    <input className='ResumeHiring'type="radio" value='Hiring'></input>
                                    <label className='ResumeOpt'> Interested in hiring</label> 
                                </div>

                                <input className='ResumeGotIt'type="submit" value="DOWNLOAD RESUME"></input>
                            </form>
                    </div>
                </div>

            </div>

       </div>


    );

}  export default Resume;