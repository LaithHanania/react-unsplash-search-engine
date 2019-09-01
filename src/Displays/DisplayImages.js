//Importing libraries
import React from 'react'

//Importing local components
import ImageCard from '../Components/ImageCard';

//Importing CSS
import '../CSS/display-images.css';

class DisplayImages extends React.Component{
    render(){
        const imageList = this.props.images.map((image) =>{
            return (<ImageCard photo={image} key={image.id}/>);
        });
        
        return(
            <div className="display-images">
                {imageList}
            </div>
        );
    }
}

//Exporting DisplayImages
export default DisplayImages;