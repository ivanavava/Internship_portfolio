import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import App from '../src/App.js';
import About from '../src/components/about.js';
import Portfolio from '../src/components/portfolio.js';
import Resume from './components/CV.js';
import Contact from './components/contact.js';
import Progress from './components/progress.js';
import Music from '../src/components/music.js'
import Work from '../src/components/work.js'
import WorkT from '../src/components/work2.js'
import { createRoot } from "react-dom/client";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='about' element={<About />}/>
      <Route path='portfolio' element={<Portfolio />}/>
      <Route path='resume' element={<Resume />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='progress' element={<Progress />}/>
      <Route path='music' element={<Music />}/>
      <Route path='work' element={<Work />}/>
      <Route path='work2' element={<WorkT />}/>
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode> // Fixed closing tag

);


