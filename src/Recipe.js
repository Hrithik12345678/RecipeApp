import React from 'react'
import style from './recipe.module.css';

function Recipe(props) {
  return (
    <div className={style.recipe}>
        <h1 className={style.h1}>{props.title}</h1>
        <hr></hr>
        <div className={style.pad}>
            <h3>USE FOLLOWING INGREDIENTS</h3>
        {props.ingredients.map((i)=>(
            <div className={style.para}>{i.text}</div>
        ))}
        </div>
        <img className={style.img} src={props.img} alt='image'></img>
        <p className={style.cal}>calories:{props.calories}</p>
      
    </div>
  )
}

export default Recipe;

