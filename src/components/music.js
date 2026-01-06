import React from 'react';
import { Link, Outlet } from "react-router-dom";
import MusicBackground from '../images/MusicThing.svg'; 




function Music() {
   return(
        /*Music div*/
        <div className='MusicThing'>
            <img className='MusicBackgroundImg' src={MusicBackground}></img>
        </div>

        

   );
}

export default Music;