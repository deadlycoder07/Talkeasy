import React from 'react';
import {Route} from 'react-router-dom';
import CustomCarousel from './components/maincontent/carosel';
import ChatUI from './components/maincontent/ChatUI';
import LoginUI from './components/login/LoginUI';

const BaseRouter = () =>(
    <div>
        <Route exact path='/' component={CustomCarousel}/>
        <Route exact path='/chat' component={ChatUI}/>
        <Route exact path='/login' component={LoginUI}/>
    </div>
);

export default BaseRouter;