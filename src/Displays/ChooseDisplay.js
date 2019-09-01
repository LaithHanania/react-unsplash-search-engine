//Importing libraries
import React from 'react';

//Importing local components
import DisplayImages from './DisplayImages';
import DisplayUsers from './DisplayUsers';
import DisplayCollections from './DisplayCollections';

class ChooseDisplay extends React.Component{
    render(){
        if(this.props.isLoading === 'yes'){
            return <div></div>;
        }
        //Destructuring this.props.display since its used often so that we can just use display instead of this.props.display
        const {display} = this.props;

        //Displaying depending on they keyword thats passed into this from the parent
        if(display === 'photos'){
            return <DisplayImages images={this.props.results}/>;
        }else if(display === 'users'){
            return <DisplayUsers users={this.props.results} />;
        }else if(display === 'collections'){
            return <DisplayCollections collections={this.props.results} />;
        }else{
            return(<div></div>);
        }
    }
}

//Exporting ChooseDisplay
export default ChooseDisplay;