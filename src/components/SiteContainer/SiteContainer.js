import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import SectionContainer from '../SectionContainer/SectionContainer';

class SiteContainer extends React.Component {
    state = {
        
    }

    render(){
        return (
            <Switch>
              <Route path='/:language/:page' render={SectionContainer}/> {/*Set path variables for localization & page getting*/}
              <Route render={() => <Redirect to='/en/landing'/>}/> {/*Route to English by default.*/}
            </Switch>
        );
    }
}

export default SiteContainer;