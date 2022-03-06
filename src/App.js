import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';


function App() {

  const APP_ID ='c1d95d07';
  const APP_KEY='4d8f2ff28a26ca4f1aec1a487b079ccb	';

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('chicken')
  
  
  


  useEffect(()=>{getRecipe()},[query]);
  const getRecipe = async ()=> {

    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); 
  }
   function get (e){
     e.preventDefault();
     setQuery(search);
   }

   console.log(recipes);
  

  
  
  
  return (
    <div className="App">
      <form onSubmit={get} className="Search_form">
        <input className="Search_input" type='text' onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <button className='Search_btn' type='submit'>SEARCH</button>
      </form>
      <div className='box'>
      {recipes.map((item,index)=>
      (<Recipe  key={index} title={item.recipe.label} calories={item.recipe.calories} img={item.recipe.image} ingredients={item.recipe.ingredients}></Recipe>))};
      </div>
      
    </div>
  );
}

export default App;
