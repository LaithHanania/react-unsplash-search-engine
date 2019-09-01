//Importing libraries
import React from 'react';

class UserCard extends React.Component{
    checkEmptyInfo =(information)=>{
        if(information === '' || information === null){
            return("No information available");
        }else{
            return(information);
        }
    }

    checkLocationInfo = (info) =>{
        if(info === '' || info === null){
            return("No location available");
        }else{
            return(info);
        }
    }

    checkBioInfo = (info) =>{
        if(info === '' || info === null){
            return("No bio available");
        }else{
            return(info);
        }
    }

    render(){
        const {name, location, instagram_username, twitter_username, username, bio} = this.props.person;
        return(
            <div className="card">
                <div className="image">
                    <img src={this.props.person.profile_image.large} alt="No information available" />
                </div>

                <div className="content">
                    <div className="header">{this.checkEmptyInfo(name)}</div>
                    <div className="meta">{this.checkLocationInfo(location)}</div>
                    <div className="description">
                        <div style={{height: '29px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            <i>{this.checkBioInfo(bio)}</i> <br />
                        </div>
                        <b>Instagram:</b> {this.checkEmptyInfo(instagram_username)} <br />
                        <b>Twitter:</b> {this.checkEmptyInfo(twitter_username)}
                    </div>
                </div>

                <div className="extra content">
                    <div>
                        <i className="user icon" /> {username}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;