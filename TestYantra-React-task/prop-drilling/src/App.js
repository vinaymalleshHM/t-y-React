import React from 'react';
import './App.css';
import ComponentD from './components/ComponentD';

export default class  App extends React.Component {
state ={
  userName : 'Dimple'
}

  render(){

    return (
      <div>
     <ComponentD uname={this.state.userName}/>
      </div>
    );
  }
}

 
