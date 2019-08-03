import React from 'react';
import {withRouter} from 'react-router-dom';

class SectionContainer extends React.Component {
    state = {
        
    }

    localizedStrings = require('../../locales/' + this.props.match.params.language + '/' + this.props.match.params.page + '.json');

    componentDidMount(){
        //Set state to current language & page
        //Also get locale for page to pass as a prop
        let newState = {
            language: this.props.match.params.language,
            page: this.props.match.params.page,
            localizedStrings: require('../../locales/' + this.props.match.params.language + '/' + this.props.match.params.page + '.json')
        }
        this.setState(newState);
    }

    render(){
        return (
            <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                {this.localizedStrings.testString}
            </div>
        );
    }
}

export default withRouter(SectionContainer);