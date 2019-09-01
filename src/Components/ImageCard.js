//Attempting to display pictures based on using the grid
//Importing libraries
import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {spans:0}

        //Creating a reference (ref)
        //A ref is created for reaching into the DOM and extracting information from there
        this.imageRef=React.createRef();
    }


    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
        //Which is adding an event listener, listening for a load event like when an img loads
        //And the second argument is what we want to be called when load is heard, which is this.setSpans in this case
    }

    setSpans=()=>{
        const height= this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans});
    }

    checkEmptyInfo =(information)=>{
        if(information === '' || information === null){
            return("No information available");
        }else{
            return(information);
        }
    }

    render(){
        const {urls, alt_description, created_at, description} = this.props.photo;
        console.log(this.props.photo);
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            {/*
                    <div className="ui card">
            <div className="image">*/}
                            <img ref={this.imageRef} src={urls.regular} alt={alt_description}/>
                            {/*
                        </div>
                        <div className="content">
                            <div className="header" style={{height: '27px', overflow: 'hidden'}}>{alt_description}</div>
                            <div className="meta">
                                <span className="date">Shot at: {created_at}</span>
                            </div>
                            <div className="description" style={{height:'36px', overflow: 'hidden'}}>
                                <i>{this.checkEmptyInfo(description)}</i>
                            </div>
                        </div>
                            </div>*/}
            </div>
        );
    }
}

//Exporting ImageCard
export default ImageCard;