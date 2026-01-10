//Portfolio page
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ProgressThing from '../images/PortfolioThing.svg';
import LeftA from '../images/LeftArrow.svg';
import RightA from '../images/RightArrow.svg';
import LView from '../images/ListView.svg';
import GView from '../images/GridView.svg';
import GBttn from '../images/GreenWindowBttn.svg';
import YBttn from '../images/YellowWindowBttn.svg';
import RBttn from '../images/RedWindowBttn.svg';
import ScrollPort from '../images/ScrollPort.svg';
import AssignmentWork1 from '../workcontent/Webshot.png'
import AssignmentWork2 from '../workcontent/PortfolioScreenshot2.png';
import AssignmentWork3 from '../workcontent/PixelPlaygroundShot.png';
import AssignmentWork4 from '../workcontent/DystopianCurrency.png'








//css
import '../App.css';

function Progress() {
    return(

        /*Portfolio section*/
        <div className="PortfolioThing">

            {/*Background image*/}
            <img className='BackgroundPortfolioImg'src={ProgressThing}></img>

            <div className='PortfolioContentColumn'>

                <div className='PortRow1'>

                    <div className='PArrows'>

                        <a className='LeftArrow' href=''>
                            <img className='LArrow' src= {LeftA}></img>
                        </a>

                        <a className='RightArrow' href=''>
                            <img className='RArrow' src={RightA}></img>
                        </a>

                    </div>

                    <div className='ListGridView' href=''>

                        <a className='ListView'>
                            <img className='LView' src={LView}></img>
                        </a>

                        <a className='GridView' href=''>
                            <img className='GView' src={GView}></img>
                        </a>
                    </div>

                    <div className='PortfolioButtons'>

                        <a className='PButtonG' href=''>
                            <img className='PBttn' src={GBttn}></img>
                        </a>

                        <a className='PButtonY' href=''>
                            <img className='PBttn' src={YBttn}></img>
                        </a>

                        <Link className='PButtonR' to='/'>
                            <img className='PBttn' src={RBttn}></img>
                        </Link>

                    </div>
                </div>

                <div className='PortRow2'>
                    <img className='ScrollPort' src={ScrollPort}/>
                </div>

            </div>

            <div className='ProgressScroll'>

                <div className='ContentPortGrid'>
                    {/*USE FOR LOOP LOGIC HERE FOR CONTENT*/}

                    
                   

                    <Link className='ContentItemLink1' to='/WebshopA'>
                        <div className='ContentImage' >
                            <img className='AssignmentShot' src={AssignmentWork1}></img>
                        </div>
                        <label className='ItemName'>Webshop UX <br></br>Challenge</label>
                        <label className='ItemSize'>26 KB</label>
                    </Link>

                    <Link className='ContentItemLink1' to='/PortfolioA'>
                        <div className='ContentImage' >
                            <img className='AssignmentShot' src={AssignmentWork2}></img>
                        </div>
                        <label className='ItemName'>Portfolio website <br></br>(UX & Frontend)</label>
                        <label className='ItemSize'>26 KB</label>
                    </Link>

                    <Link className='ContentItemLink1' to='/PixelPlayground'>
                        <div className='ContentImage' >
                            <img className='AssignmentShot' src={AssignmentWork3}></img>
                        </div>
                        <label className='ItemName'>Pixel Playground <br></br>(UX & React)</label>
                        <label className='ItemSize'>26 KB</label>
                    </Link>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>Erion website <br></br>(UX & UI design)</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <Link className='ContentItemLink' to='/DystopianA'>
                        <div className='ContentImage' >
                        <img className='AssignmentShot4' src={AssignmentWork4}></img>
                        </div>
                        <label className='ItemName'>Distopian currency <br></br>(Media challenge)</label>
                        <label className='ItemSize'>26 KB</label>
                    </Link>

                </div>


            </div>

        </div>
        


    );
}

export default Progress;