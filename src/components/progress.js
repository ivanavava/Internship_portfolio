//Portfolio page
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ProgressThing from '../images/ProgressThing.svg';
import LeftA from '../images/LeftArrow.svg';
import RightA from '../images/RightArrow.svg';
import LView from '../images/ListView.svg';
import GView from '../images/GridView.svg';
import GBttn from '../images/GreenWindowBttn.svg';
import YBttn from '../images/YellowWindowBttn.svg';
import RBttn from '../images/RedWindowBttn.svg';
import ScrollPort from '../images/ScrollPort.svg';







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
                    {/*<img className='ScrollPort' src={ScrollPort}/>*/}
                </div>

            </div>

            <div className='ProgressScroll'>

                <div className='ContentPortGrid'>
                    {/*USE FOR LOOP LOGIC HERE FOR CONTENT*/}
                   

                    <a className='ContentItemLink1' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink1' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink1' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink'>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                    <a className='ContentItemLink' href=''>
                        <div className='ContentImage' >

                        </div>
                        <label className='ItemName'>mywork.pdf</label>
                        <label className='ItemSize'>26 KB</label>
                    </a>

                </div>


            </div>

        </div>
        


    );
}

export default Progress;