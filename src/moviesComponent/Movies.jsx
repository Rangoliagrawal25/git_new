// autocomplete 
// rfce
import React from 'react'
import Home from'./Home';
import Favourite from './Favourite';
import PageNotFound from "./PageNotFound";
import { Route,Redirect , Switch} from 'react-router-dom';

function Movies() {
    return (
        <><Switch>
            <Route path="/home">
            <Home></Home>
         </Route>
        <Route path="/favourites">
            <Favourite></Favourite>
        </Route>
        <Redirect from = "/" to ="/home" exact></Redirect>
        
        <Route> 
            <PageNotFound></PageNotFound>
        </Route>
       
        </Switch>
        
        </>

    )

}

export default Movies; 
