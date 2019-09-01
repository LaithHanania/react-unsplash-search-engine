import React from 'react';

class CollectionCard extends React.Component{
    checkEmptyInfo =(information)=>{
        if(information === '' || information === null){
            return("No information available");
        }else{
            return(information);
        }
    }

    single=(event)=>{
        this.props.showSingle(this.props.collection);
    }

    render(){
        const {cover_photo, title, published_at, description, user}= this.props.collection;

        return(
            <div className="card">
                <div className="image">
                    <img src={cover_photo.urls.regular} alt={cover_photo.alt_description}/>
                </div>
                <div className="content">
                    <div className="header">
                        {this.checkEmptyInfo(title)}
                    </div>
                    <div className="meta">
                        <div>Published at: {this.checkEmptyInfo(published_at)}</div>
                    </div>
                    <div className="description">
                        {this.checkEmptyInfo(description)}
                    </div>
                    <div style={{color: 'blue', cursor: 'pointer'}} onClick={this.single}>
                        <u>Full Collection</u>
                    </div>
                </div>
                <div className="extra content">
                    <div>
                        <i className="user icon" />
                        {this.checkEmptyInfo(user.username)}
                    </div>
                </div>
            </div>
        );
    }
}

export default CollectionCard;