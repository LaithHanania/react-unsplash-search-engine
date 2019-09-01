//Importing libraries
import React from 'react'

//Importing local components
import CollectionCard from '../Components/CollectionCard';
import SingleCollection from '../Components/SingleCollection';

class DisplayCollections extends React.Component{
    state={displaySingleCard: 'no', singleCard: []};

    singleState=(infoCard)=>{
        this.setState({displaySingleCard: 'yes', singleCard: infoCard});
    }

    render(){
        const collectionList= this.props.collections.map((collect) =>{
            return <CollectionCard collection={collect} key={collect.id} showSingle={this.singleState}/>;
        });

        if(this.state.displaySingleCard === 'no'){
            return(
                <div className ="ui fluid cards">
                    {collectionList}
                </div>
            );
        }else{
            return(
                <SingleCollection collection={this.state.singleCard}/>
            );
        }
    }
}

//Exporting DisplayCollections
export default DisplayCollections;