import React from 'react';

import '../CSS/single-collections.css';

class SingleCollection extends React.Component{
    constructor(props){
        super(props);
        this.state={imgWidth: 0, imgHeight: 0};
        this.imageRef=React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setDimensions);
    }

    setDimensions = () =>{
        const width = this.imageRef.current.clientWidth;
        const height = this.imageRef.current.clientHeight;

        this.setState({imgWidth: width, imgHeight: height});
    }

    //Function to replace empty text with "No information available"
    checkEmptyInfo =(information)=>{
        if(information === '' || information === null){
            return(<i>No information available</i>);
        }else{
            return(information);
        }
    }

    render(){
        //Destructuring frequently used terms
        const {description, title, total_photos, published_at, updated_at, cover_photo} = this.props.collection;
        const {username, first_name, last_name, name, bio, instagram_username, twitter_username, location, profile_image} = this.props.collection.user;

        //Mapping all the tags for the collection
        const tagList = this.props.collection.tags.map((tag)=>{
            return ('"' + tag.title + '"'+ " ");
        });

        //Mapping all the preview pictures
        const previewPicList = this.props.collection.preview_photos.map((preview)=>{
            return(
                <div style={{padding: '10px'}} key={preview.id}>
                    <img src={preview.urls.small} alt={description} key={preview.id}/>
                </div>
            );
        });

        return(
            <div>
                <div className="collection-information">
                    <div className="collection-photo" style={{width: this.state.imgWidth}}>
                        <img ref={this.imageRef} src={cover_photo.urls.small} alt={cover_photo.alt_description}/> <br/>
                        <b>Collection cover description:</b> {this.checkEmptyInfo(cover_photo.description)} <br/>
                    </div>

                    <p className="collection-title"><u><b>Collection Title: </b>{this.checkEmptyInfo(title)} </u></p>
                    <div className="collection-body">
                        <b>Description:</b> {this.checkEmptyInfo(description)} <br/>
                        <b>Total pictures:</b> {this.checkEmptyInfo(total_photos)} <br/>
                        <b>Publish date:</b> {this.checkEmptyInfo(published_at)} <br/>
                        <b>Update date:</b> {this.checkEmptyInfo(updated_at)} <br />
                    </div>
                </div>

                <div className="tags">
                    <b>Tags:</b> {tagList} <br /> <br/>
                </div>

                <div className="user-information">
                    <div className="user-image">
                        <img src={profile_image.large} alt={"Profile"}/>
                    </div>
                    <div className="user-content">
                        <b>Username:</b> {this.checkEmptyInfo(username)} <br/>
                        <b>First name:</b> {this.checkEmptyInfo(first_name)} <br/>
                        <b>Last name: </b> {this.checkEmptyInfo(last_name)} <br/>
                        <b>Name:</b> {this.checkEmptyInfo(name)} <br/>
                        <b>Location:</b> {this.checkEmptyInfo(location)} <br/>
                        <b>Bio:</b> {this.checkEmptyInfo(bio)} <br/>
                        <b>Instagram username:</b> {this.checkEmptyInfo(instagram_username)} <br/>
                        <b>Twitter username:</b> {this.checkEmptyInfo(twitter_username)} <br/> <br/>
                    </div>
                </div>

                <div className="preview">
                    <b>Preview pictures:</b> <br/>
                    <div className="preview-pictures">
                        {previewPicList}
                    </div>
                </div>

            </div>
        );
    }
}

export default SingleCollection;