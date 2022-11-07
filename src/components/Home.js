import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export default function Home() {
  const [strDrink, setStrDrink] = useState('');
  const [strDrinkThumb, setstrDrinkThumb] = useState('');

  useEffect(() => {
    axios.get(API_URL)
    .then((response) => {
      const strDrink = response.data.drinks[0];
      setStrDrink(strDrink.strDrink);
      setstrDrinkThumb(strDrink.strDrinkThumb);
    }).catch (error => {
      alert(error);
    });
  }, [])
  

  return (
    <div>
      <div id='container'>
        <img src={strDrinkThumb} alt="A picture of the drink"></img>
        <h3>{strDrink}</h3>
      </div>
    </div>
  )
}
