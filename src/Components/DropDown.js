//DropDown: dropdown menu for user to select either photos, users or collections to search for
//The values from here are passed back into Retrieve to determine what to search for

//Importing libraries
import React from 'react';

class DropDown extends React.Component{
    //Initializing state
    state={selection: ''};

    //Function to be called when a change happens, as when a user selects an option
    onSelection= (event) =>{
        this.setState({selection: event.target.value}); //set the selection state object to the new selected event (event.target.value)
        console.log(event.target.value);
        this.props.retrieveState(event.target.value); //Passing the new selection to parent using prop function
    }

    //Checks warningColor prop that's passed in to check if user made a valid drop down selection, then determines proper border color
    boxColor=()=>{
        if(this.props.warningColor === 'yes'){
            return('red');
        }else{
            return('');
        }
    }

    render(){
        return(
        <select 
        className="ui search selection dropdown" 
        value={this.state.selection} //changing the value to the current state
        onChange={this.onSelection} //call onSelection whenever a change happens
        style={{borderColor: this.boxColor()}}
        > 

            <option value=''> Search Selection</option> {/* Default option */}
            <option value="photos">Images</option>
            <option value="users">Users</option>
            <option value="collections">Collections</option>

        </select>
        );
    }
}

//Exporting DropDown
export default DropDown;