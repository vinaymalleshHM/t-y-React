import React, { useState } from 'react';
import './App.css';
import RecipeList from './component/recipelist/Recipelist'
import RecipeDetails from './component/recipedetails/Recipedetails'
import Navbar from './component/Navbar';
import { UserProvider } from './context/userContext';
import Form from './component/form/Form';


// import Login from './components/login/login';


function App(props) {


  const recipe = [
    {
      id: 1,
      name: 'jamun',
      img: 'https://cdn.pixabay.com/photo/2014/06/18/15/48/indian-sweet-371357__340.jpg',
      ingridiants: ['water', 'mtr', 'sugar']
    },
    {
      id: 2,
      name: 'noodles',
      img: 'https://cdn.pixabay.com/photo/2019/08/30/09/17/noodles-4440831__340.jpg',
      ingridiants: ['water', 'oil', 'magge']
    },
    {
      id: 3,
      name: 'lime sweet chiecken',
      img: 'https://cdn.pixabay.com/photo/2016/01/21/06/38/lime-1152858__340.jpg',
      ingridiants: ['chiken', 'mtr', 'oil']
    },
    {
      id: 4,
      name: 'curry thai food',
      img: 'https://cdn.pixabay.com/photo/2014/06/18/15/48/indian-sweet-371357__340.jpg',
      ingridiants: ['curd', 'water', 'vegitables']
    }
  ]

  const userDetail = {
    login: true,
    details: false,
    setLogout: val => {
      handleChange(val)
    },
    setDetail: val => {
      handleChangeLogin(val)
    }
  }

  const [isClick, setClick] = useState(false);
  const [detalisOfData, setDetalisOfData] = useState('');
  const [recipeis, setRecipe] = useState(recipe);
  const [con, setCon] = useState(userDetail)
  // const [del, setDel] = useState(userDetail)

  const handleChange = (val) => {
   
    setCon({
      ...con,
      login: val
    })
  }
  const {details} = con

  const handleChangeLogin = (val) => {
    setCon({
      ...con,
      details: val
    })
  }

  const showData = (val) => {
    setDetalisOfData(val)
    setClick(true)
  }

  return (
    <>
      <UserProvider value={con}>
        <Navbar />
        {/* <Form /> */}
      </UserProvider>
      {con.details ? <div className='row'>
        <div className='col-md-6'><RecipeList action={showData} list={recipeis} /></div>
        <div className='col-md-6'>{isClick ? <RecipeDetails data={detalisOfData} /> : ''}</div>
      </div> :null}
    </>
  );


}

export default App;
