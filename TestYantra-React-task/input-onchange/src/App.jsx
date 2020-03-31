import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './component/Person';

let oldValues = [
  {
    id: 1,
    name: 'Dinga',
    age: 28
  },
  {
    id: 2,
    name: 'Dimple',
    age: 26
  },
  {
    id: 3,
    name: 'Pim',
    age: 22
  }
]

class App extends React.Component {
  state = {
    detail: false,
    detail1: false,
    user: [
      {
        id: 1,
        name: 'Dinga',
        age: 28
      },
      {
        id: 2,
        name: 'Dimple',
        age: 26
      },
      {
        id: 3,
        name: 'Pim',
        age: 22
      }
    ]

  }

  changeValue = () => {
    this.setState({
      detail:!this.state.detail
    })
  }
  // changeValue1 = () => {
  //   this.setState({
  //     detail1: !this.state.detail1
  //   })
  // }

  actualData = ()=>{
    this.setState({
      user:oldValues.map(oldval =>({...oldval}))
    })
    console.log(this.state.user)
  }


  handleChange = (event, recieveData) => {
    // const value = [...this.state.user]
    // value.map((val, index) => {
    this.state.user.map((val, index) => {
      if (val.id === recieveData) {
        //     val.name=event
        //     console.log("true")
        //     this.setState({
        //       name: event,
        //       ...value
        //     })
        //     console.log(this.state.user[index])
        //   }
        // }
        // )
        var stateCopy = Object.assign({}, this.state)
        stateCopy.user[recieveData -1].name = event
        this.setState(stateCopy);
      }
    })  
  }

  delete = (key) => {
    const deleteObject = this.state.user.filter(user =>
      user.id !== key)
    this.setState({
      user: deleteObject
    })
  }
  render() {
    return (
      <>
        <h1 className="offset-5 mt-3">React App</h1>
      <button className="btn btn-primary offset-5 mt-3" onClick={this.actualData}>Switch</button>
        <button className="btn btn-primary ml-3 mt-3" onClick={this.changeValue} >Toggle Name</button>&nbsp;&nbsp;&nbsp;
        {this.state.detail ? <Person data={this.state.user} action={this.handleChange} delete={this.delete} className="mt-3" /> : null}
        {/* {this.state.detail1 ? <Person data={this.state.user} className="mt-3" /> : null} */}
      </>

    );
  }



}

export default App;
