// Import 'useState' Hook from React
import {useState} from 'react';
import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

function App() {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  // Name the setter method 'setFriendsList'
  const [friendsList, setFriendsList] = useState(friends);
  //

  // Create a method 'removeFriend()' that takes in 'id' and filters through 'friendsList'
  // Update the state with the new friends list.
  const removeFriend = (deletedId) => {
    const updatedFriendsList = friendsList.filter( friend => friend.id !== deletedId)

    setFriendsList(updatedFriendsList);
  }
  //

  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {/* Map through 'friendsList' and render a 'FriendCard' for each friend */}
      {friendsList.map((friend) => (
        <li key={friend.id}>
          <FriendCard 
          id={friend.id}
          name={friend.name}
          occupation={friend.occupation}
          location={friend.location}
          image={friend.image}
          removeFriend={removeFriend}></FriendCard>
        </li>
      ))}
      {/* Pass in the 'removeFriend()' method and each property of a friend */}
    </Wrapper>
  );
}

export default App;
