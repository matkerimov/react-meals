import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link, useHistory} from "react-router-dom";

const AllMeals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const history = useHistory()

    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    }, [])

    const searchInput = (e) => {
        setSearch(e.target.value)
    }
    const heandleClick = () =>{
        if (search.trim()){
           return  history.push(`browse/${search}`)
        }else{
            return "NOT FOUND"
        }
    }

    return (
        <div>
            <input onChange={searchInput} type='text'/>
            <button onClick={heandleClick}>Search</button>
            <div className="row">
                {
                    meals.map(item => (
                        <div className="col-3">
                            <Link to={`/meal/${item.idMeal}`}>
                                <div className="box">
                                    <img src={item.strMealThumb} alt=""/>
                                    <h3>{item.strMeal}</h3>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllMeals;