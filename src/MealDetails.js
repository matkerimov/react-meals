import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

const MealDetails = () => {
    const params = useParams()
    const [meal, setMeal] = useState({})

    const strIngredients = Array(20).fill(1).reduce((acc, item, idx) => {
        if (meal[`strIngredients${idx +1}`]){
            return [...acc, meal[`strIngredients${idx +1}`]]
        }
        return acc
    }, [])
    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php/${params.id}`)
            .then(({data})=> setMeal(data.meals[0]))
    }, [])
    return (
        <div className="row">
            <div className="col-details">
                <img src={meal.strMealThumb} alt=""/>
            </div>
            <div className="col-details">
                <h3>{meal.strMeal}</h3>
                <p>{meal.strIngredients}</p>
            </div>
            {
                strIngredients.map(item => (
                    <div>
                        <img src={`https://www.themealdb.com/images/ingridients/${item}.php`} alt=""/>
                        <div>{item}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default MealDetails;