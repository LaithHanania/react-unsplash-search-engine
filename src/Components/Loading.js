//Loading: provides a loading indicator when loading is happening as passed into it by a prop
//Otherwise returns empty <p> tags (basically nothing)

//Importing libraries
import React from 'react';

class Loading extends React.Component{
    render(){
        if(this.props.isLoading === 'no'){
            return(
                <p></p>
            );
        }else{
            return(
                <div className="ui active inline loader"></div>
            );
        }
    }
}

export default Loading;