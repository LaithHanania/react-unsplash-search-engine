//SearchBar: a searchbar that takes in a users text input
//Constantly updates the "value" whenever a change happens with onChange
//When the form is submitted with onSubmit, the search term is passed back into Retrieve 
//Also calls a loading indicator when loading is happening

//Importing libraries
import React from 'react';

//Importing local components
import Loading from './Loading';

class SearchBar extends React.Component{
    state = {searchTerm: ''}; //Initializing state with an empty "searchTerm"

    //Function to be executed when form changed
    //An "event" must be passed into it as a parameter
    //Using arrow function to automatically bind "this"
    onSearchChange = (event) =>{
        this.setState({searchTerm: event.target.value}); //Setting the searchTerm to whatever the user last typed in
    }

    //Using arrow function to automatically bind "this"
    onSearchSubmit = (event) =>{
        event.preventDefault(); //prevents the default action of refreshing the page
        console.log("Search submitted");
        this.props.conductSearch(this.state.searchTerm); //Passing searchTerm to
    }

    render(){
        return(
            <form onSubmit={this.onSearchSubmit}> {/* Creating a form for submitting the search */}
                <div className = "ui search">
                    <div className = "ui icon input">

                        <input className = "prompt"
                         type = "text" 
                         placeholder="Search" 
                         value={this.state.searchTerm}  /* the value prop is going to essentially overwrite whatevers in the search bar
                                                        in this case we want to show what the user typed in so we set it as the state
                                                        term which contains e.target.value from before the rendering happened
                                                        if we set value = "laith" the searchbar would show laith in its input */
                         onChange={this.onSearchChange} /* onChange indicates what to do when the input changes */
                                                        /* when calling a function in this do this.functionName without the () */
                         /> {/* Creating the search bar */}

                        <i className = "search icon"/> {/* Adding search bar icon */}
                        
                    </div>
                    <Loading isLoading={this.props.isLoading}/> {/* Loading indicator based on a prop passed in */}
                </div>
            </form>
        );
    }
}

//Exporting SearchBar
export default SearchBar;