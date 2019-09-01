//Importing libraries
import React from 'react';

//Importing local components
import UserCard from '../Components/UserCard';

//Importing CSS
import '../CSS/display-users.css';

class DisplayUsers extends React.Component{
    render(){
        //Mapping
        const userList = this.props.users.map((user) =>{
            return<UserCard person={user} key={user.id}/>
        });

        return(<div className="ui link cards">{userList}</div>);
    }
}

//Exporting DisplayUsers
export default DisplayUsers;