//StatusCode: catches errors if they occur while connecting to the API
//Otherwise displays amount of results found

//Importing libraries
import React from 'react';

class StatusCode extends React.Component{
    render(){
        if(this.props.code ===0){
            return(<p> </p>);
        }else if(this.props.code === 200){
            return(<div>Found {this.props.length} results.</div>);
        }else{
            return(<div>Error code: {this.props.code}</div>);
        }
    }
}

//Exporting StatusCode
export default StatusCode;