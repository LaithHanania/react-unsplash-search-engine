//Importing libraries
import React from 'react'

//Importing local files
import Retrieve from './Api/Retrieve';
import ChooseDisplay from './Displays/ChooseDisplay';

//Importing CSS
import './CSS/full-page.css';

class App extends React.Component{
    componentDidMount(){
        document.title="Search Engine";
    }

    state = {showResults:'nothing', displayArray:[]};

    //Function to change the state as retrieved from Retrieve
    changeDisplay = (resultDisplay) =>{
        this.setState({showResults: resultDisplay});
    }

    //Function to update the state array that's passed in to the display classes
    updateArray = (searchArray)=>{
        this.setState({displayArray: searchArray});
    }

    render(){
        return(
            <div className="full-page">
                <div className="page-height">
                    <div className="top-bar">
                        <p style={{fontSize:'20px', marginTop:'10px', color:'white'}}> Search for an image, user or collection: </p>
                        <Retrieve displayWhat={this.changeDisplay} displayArray={this.updateArray}/>
                    </div>
                    <ChooseDisplay display={this.state.showResults} results={this.state.displayArray} />
                </div>
                <br/>
                <p className="footer">Copyright @Laith Hanania<br />Search Engine</p>
            </div>
        );
    }
}

//Exporting component
export default App;