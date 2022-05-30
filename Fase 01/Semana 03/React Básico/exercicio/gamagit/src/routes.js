import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Repositories from './Repositories';
import Home from './home';

export default function Routess() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />;
                <Route path='/repositories' component={ Repositories } />
            </Switch>
        </BrowserRouter>
    )
}