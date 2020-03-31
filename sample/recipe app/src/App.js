import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './component/recipelist/Recipelist'
import RecipeDetails from './component/recipedetails/Recipedetails'
import { Link, BrowserRouter as Router,Route} from 'react-router-dom';

// import Login from './components/login/login';


class App extends React.Component {

  state={
    isClick : false,
    detalisOfData : 'hi',
    recipe : [
      {
        id :1,
        name:'jamun',
        img :'https://cdn.pixabay.com/photo/2014/06/18/15/48/indian-sweet-371357__340.jpg',
        ingridiants :['water','mtr','sugar']
      },
      {
        id :2,
        name:'noodles',
        img :'https://cdn.pixabay.com/photo/2019/08/30/09/17/noodles-4440831__340.jpg',
        ingridiants :['water','oil','magge']
      },
      {
        id :3,
        name:'lime sweet chiecken',
        img :'https://cdn.pixabay.com/photo/2016/01/21/06/38/lime-1152858__340.jpg',
        ingridiants :['chiken','mtr','oil']
      },
      {
        id :4,
        name:'curry thai food',
        img :'https://cdn.pixabay.com/photo/2014/06/18/15/48/indian-sweet-371357__340.jpg',
        ingridiants :['curd','water','vegitables']
      }
    ]
  }





render(){
  return (
    <div className='row'>
      <div className='col-md-6'><RecipeList action={this.showData} list={this.state.recipe}/></div>
      <div className='col-md-6'>{this.state.isClick? <RecipeDetails data={this.state.detalisOfData}/>:''}</div>
    </div>
  );

}

showData =(val)=>{
  
    //console.log('detalis ',val);
    this.setState({
      detalisOfData :val,
      isClick: true
    })

}

}

export default App;
