import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

//COMPONENTS

import Home from './components/home';
import Artist from './components/artist';


const App = () => {

    return(

        <BrowserRouter>
            <div>
                <Route exact={true} path="/" component={Home} />
                <Route path="/artists/:artistid" component={Artist} />
            </div>    
        </BrowserRouter>
    )
}

ReactDom.render(<App/>,document.querySelector("#root"));