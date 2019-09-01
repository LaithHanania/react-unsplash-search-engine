//Retrieve: keeps track of what the user selected in DropDown
//Also conducts the searching when the form from SearchBar is submitted
//Provides SearchBar with prop indicating if loading is happening or not

//import libraries
import React from 'react';

//import local components
import DropDown from '../Components/DropDown';
import SearchBar from '../Components/SearchBar';
import Unsplash from './Unsplash';
import StatusCode from './StatusCode';

class Retrieve extends React.Component{
    //Initializing states of the dropdown component and the search result arrays
    state={dropDownState: '', photos: [], users: [], collections: [], loading: 'no', statusCode: 0, resultLength: 0, selectWarning: 'no'};

    //Changing the state of the dropdown component once a new one is triggered
    changeState = (changedState) =>{
        this.setState({dropDownState: changedState});
    }

    //Conducts the asynchronous search of matching terms
    onSearchSubmit = async (searchTerm) =>{
        //Checking that dropdown box selection is a valid option and not the default one
        if(this.state.dropDownState === ''){
            this.setState({selectWarning: 'yes'});
            return;
        }else{
            this.setState({loading: 'yes', selectWarning: 'no'});

            //Conducting the search depending on the dropDownState which contains either photos, users or collections
            //And then appending the URL with it to do that specific search
            const response = await Unsplash.get('/search/'+this.state.dropDownState,{
                params: {query: searchTerm} //The query is the searchTerm taken from the SearchBar
            });

            //Storing result in specified array location of photos, users or collections and resetting the other ones
            if(this.state.dropDownState === 'photos'){
                this.setState({photos: response.data.results, users: [], collections: []});
            }else if(this.state.dropDownState === 'users'){
                this.setState({photos: [], users: response.data.results, collections: []});
            }else if(this.state.dropDownState === 'collections'){
                this.setState({photos: [], users: [], collections: response.data.results});
            }  
            console.log(response.data.results);
            //console.log(response);

            //Once a resonse is completed, do the necessary steps to stop loading, get data length and status and change the display keywords
            if(response.status > 1){
                this.setState({loading: 'no', statusCode: response.status, resultLength: response.data.results.length});
                
                //Destructuring this.props.displayWhat and this.props.displayArray because we use them often so they function 
                //as displayWhat and displayArray
                const {displayWhat, displayArray} = this.props;

                //Changing the Apps display component to what needs to be displayed depending on whats searched and found
                if(this.state.photos.length > 0){
                    displayWhat('nothing');
                    displayArray(this.state.photos);
                    displayWhat('photos');
                }else if(this.state.users.length > 0){
                    displayWhat('nothing');
                    displayArray(this.state.users);
                    displayWhat('users');
                }else if(this.state.collections.length > 0){
                    displayWhat('nothing');
                    displayArray(this.state.collections);
                    displayWhat('collections');
                }else{
                    displayWhat('nothing');
                }
            }
        }
    }

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'row', fontSize:'20px', float: 'left', alignItems: 'center'}}>
                <DropDown retrieveState={this.changeState} warningColor={this.state.selectWarning}/>
                <SearchBar conductSearch={this.onSearchSubmit} isLoading={this.state.loading}/>
                <div style={{float: 'right'}}>
                    <StatusCode code={this.state.statusCode} length={this.state.resultLength}/>
                </div>
            </div>
        );
    }
}

//export Retrieve
export default Retrieve;